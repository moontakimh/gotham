import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  "aria-label"?: string;
};

export function Logo({ className, "aria-label": ariaLabel = "Moontakim" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      className={cn("size-8 shrink-0 text-current", className)}
    >
      <polygon
        fill="currentColor"
        points="400 280.82 400 0 320 0 236.09 100 163.91 100 80 0 0 0 0 280.82 100 400 167.97 400 167.97 240 232.03 240 232.03 400 300 400 400 280.82"
      />
    </svg>
  );
}
