"use client";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full rounded-lg border border-border overflow-hidden"
    >
      {showVideo ? (
        <video
          className="w-full"
          muted
          playsInline
          autoPlay
          loop
          preload="none"
          poster="/hero-banner.png"
        >
          <source src="/rootscope-banner-new.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/hero-banner.png"
          alt="RootScope hero preview"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}
