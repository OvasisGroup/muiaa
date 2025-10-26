"use client";

import React, { useRef } from "react";
import Carousel from "@/components/carousel";

interface HeroProps {
  videoSrc?: string;
  showCarousel?: boolean;
}

export default function Hero({
  videoSrc = "/images/herovid2.mov",
  showCarousel = true
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type={videoSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
          <source src="/images/herovideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay for better carousel visibility */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Centered Carousel */}
      <div className="relative z-20 h-full w-full flex items-center justify-center">
        {showCarousel && (
          <div className="w-full max-w-6xl mx-auto px-4">
            <Carousel 
              autoPlay={true}
              autoPlayInterval={5000}
              className="h-96"
            />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-75"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}