"use client";

import { useEffect } from "react";

type LightboxProps = {
  photoId: string | null;
  onClose: () => void;
};

export function Lightbox({ photoId, onClose }: LightboxProps) {
  useEffect(() => {
    if (!photoId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [photoId, onClose]);

  if (!photoId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${photoId}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-canvas/95 p-6 md:p-14"
      onClick={onClose}
    >
      <div
        className="aspect-square w-full max-w-3xl bg-surface"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
