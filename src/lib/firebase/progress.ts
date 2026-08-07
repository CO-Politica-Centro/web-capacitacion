import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase/client";
import { progressKey } from "@/lib/progress";

export type LessonProgressRecord = {
  cursoSlug: string;
  leccionSlug: string;
  completedAt?: unknown;
};

function progressCollection(uid: string) {
  const db = getFirebaseDb();
  if (!db) return null;
  return collection(db, "capacitacionUsers", uid, "lessonProgress");
}

export async function fetchCompletedLessonKeys(
  uid: string,
): Promise<Set<string>> {
  const col = progressCollection(uid);
  if (!col) return new Set();
  const snap = await getDocs(col);
  const keys = new Set<string>();
  for (const document of snap.docs) {
    const data = document.data() as LessonProgressRecord;
    if (data.cursoSlug && data.leccionSlug) {
      keys.add(progressKey(data.cursoSlug, data.leccionSlug));
    } else {
      keys.add(document.id);
    }
  }
  return keys;
}

export async function markLessonComplete(
  uid: string,
  cursoSlug: string,
  leccionSlug: string,
): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error("Firestore no está disponible.");
  const id = progressKey(cursoSlug, leccionSlug);
  const ref = doc(db, "capacitacionUsers", uid, "lessonProgress", id);
  await setDoc(
    ref,
    {
      cursoSlug,
      leccionSlug,
      completedAt: serverTimestamp(),
    },
    { merge: true },
  );
  const userRef = doc(db, "capacitacionUsers", uid);
  await setDoc(
    userRef,
    { emailUpdatedAt: serverTimestamp(), uid },
    { merge: true },
  );
}

export async function unmarkLessonComplete(
  uid: string,
  cursoSlug: string,
  leccionSlug: string,
): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error("Firestore no está disponible.");
  const id = progressKey(cursoSlug, leccionSlug);
  const ref = doc(db, "capacitacionUsers", uid, "lessonProgress", id);
  await deleteDoc(ref);
}
