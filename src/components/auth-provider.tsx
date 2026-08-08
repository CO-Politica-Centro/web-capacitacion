"use client";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase/client";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function mapAuthError(error: unknown): string {
  const code =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
      ? (error as { code: string }).code
      : "";

  switch (code) {
    case "auth/email-already-in-use":
      return "No se pudo crear la cuenta con esos datos. Prueba iniciar sesión o recuperar la contraseña.";
    case "auth/invalid-email":
      return "El correo no es válido.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Correo o contraseña incorrectos.";
    case "auth/weak-password":
      return "La contraseña debe tener al menos 8 caracteres.";
    case "auth/too-many-requests":
      return "Demasiados intentos. Espera un momento.";
    case "auth/network-request-failed":
      return "No hay conexión con el servicio de autenticación.";
    default:
      return "No se pudo completar la operación. Intenta de nuevo.";
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const configured = isFirebaseConfigured();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(!configured);

  useEffect(() => {
    if (!configured) return;
    const auth = getFirebaseAuth();
    if (!auth) return;
    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setReady(true);
    });
  }, [configured]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading: !ready,
      configured,
      async signIn(email, password) {
        const auth = getFirebaseAuth();
        if (!auth) throw new Error("Firebase no está configurado.");
        try {
          await signInWithEmailAndPassword(auth, email.trim(), password);
        } catch (error) {
          throw new Error(mapAuthError(error));
        }
      },
      async signUp(email, password) {
        const auth = getFirebaseAuth();
        if (!auth) throw new Error("Firebase no está configurado.");
        try {
          await createUserWithEmailAndPassword(auth, email.trim(), password);
        } catch (error) {
          throw new Error(mapAuthError(error));
        }
      },
      async resetPassword(email) {
        const auth = getFirebaseAuth();
        if (!auth) throw new Error("Firebase no está configurado.");
        try {
          await sendPasswordResetEmail(auth, email.trim());
        } catch (error) {
          // Generic message to avoid email enumeration.
          if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            (error as { code: string }).code === "auth/invalid-email"
          ) {
            throw new Error("El correo no es válido.");
          }
          // Still succeed from the user's perspective for unknown emails.
        }
      },
      async logOut() {
        const auth = getFirebaseAuth();
        if (!auth) return;
        await signOut(auth);
      },
    }),
    [user, ready, configured],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return ctx;
}
