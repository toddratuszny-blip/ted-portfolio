"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LightboxImageProps = {
  alt: string;
  className?: string;
  gallery: string[];
  index: number;
  priority?: boolean;
  src: string;
  width: number;
  height: number;
};

export default function LightboxImage({
  alt,
  className,
  gallery,
  index,
  priority,
  src,
  width,
  height,
}: LightboxImageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + gallery.length) % gallery.length,
    );

  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % gallery.length,
    );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, gallery.length]);

  return (
    <>
      <button
        type="button"
        onClick={() => setActiveIndex(index)}
        className="flex h-fit w-full self-start cursor-zoom-in justify-center text-left"
        aria-label={`Open image ${index + 1}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={className}
        />
      </button>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
            aria-label="Close gallery"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          </button>

          <div className="container relative mx-auto flex flex-col items-center">
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  className="absolute -left-4 top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black md:left-4 md:h-11 md:w-11"
                  aria-label="Previous image"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18L9 12L15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute -right-4 top-1/2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black md:right-4 md:h-11 md:w-11"
                  aria-label="Next image"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                </button>
              </>
            )}

            <div
              className="relative flex max-h-full w-full max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={gallery[activeIndex]}
                alt={`${alt} ${activeIndex + 1}`}
                width={1600}
                height={1600}
                unoptimized
                className="max-h-[85vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}