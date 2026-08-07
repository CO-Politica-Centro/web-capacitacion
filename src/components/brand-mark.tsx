import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  nameClassName?: string;
  size?: number;
  showName?: boolean;
  name: string;
  priority?: boolean;
};

export function BrandMark({
  className,
  nameClassName,
  size = 36,
  showName = true,
  name,
  priority = false,
}: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo-flor.png"
        alt=""
        width={size}
        height={size}
        className="shrink-0 rounded-full"
        priority={priority}
        sizes={`${size}px`}
      />
      {showName ? (
        <span
          className={cn(
            "font-display text-base font-semibold tracking-tight sm:text-lg",
            nameClassName,
          )}
        >
          {name}
        </span>
      ) : null}
    </span>
  );
}
