import { X } from "lucide-react";
import { useEffect } from "react";

export function VideoModal({
  open,
  embedSrc,
  onClose,
}: {
  open: boolean;
  embedSrc: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 p-4 backdrop-blur-sm md:p-8"
    >
      <button
        type="button"
        className="absolute inset-0"
        aria-label="Close video"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-5xl">
        <h2 id="video-modal-title" className="sr-only">
          Skyland Ranch film
        </h2>
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-mist/30 bg-mist/10 text-mist transition-colors hover:bg-mist/20 md:-top-16"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lift">
          <iframe
            src={embedSrc}
            title="Skyland Ranch — film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
