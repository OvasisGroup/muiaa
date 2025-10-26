"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoSectionProps {
  className?: string;
}

export default function VideoSection({ className = "" }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayClick();
  };

  return (
    <section 
      className={`bg-black py-32 px-4 ${className}`}
      style={{
        backgroundImage: "url('/images/video-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Open Hackathons
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform junior developers into world-class engineers through hands-on blockchain innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video bg-black border border-gray-700 rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Video element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            onClick={handlePlayClick}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            controls={isPlaying}
            preload="metadata"
          >
            <source src="/images/hackathon-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button overlay - only show when not playing */}
          {!isPlaying && (
            <motion.button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer bg-black/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary/90 hover:bg-primary text-black rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Play className="h-12 w-12 ml-1" fill="currentColor" />
              </div>
            </motion.button>
          )}

          {/* Optional title overlay - only show when not playing */}
          {!isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <h3 className="text-white text-xl font-semibold">
                Watch Our Latest Video
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Discover the future of blockchain technology
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}