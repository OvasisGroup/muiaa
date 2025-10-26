"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselSlide {
  title: string;
  body: string;
  image_url: string;
  url: string;
  platform?: string;
}

interface CarouselProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export default function Carousel({
  autoPlay = true,
  autoPlayInterval = 8000,
  className = ""
}: CarouselProps) {
  const slides: CarouselSlide[] = [
    {
      title: "The Future of Chamas is Here",
      body: "Secure, transparent, and automated financial management platform built on blockchain technology for African savings groups.",
      image_url: "/images/carousel/chama-phones.png",
      url: "https://example.com/nextjs-app",
    },
    {
      title: "Master Web3, AI & Blockchain",
      body: "Learn Web3 development, cryptocurrency, and Artificial Intelligence from industry experts. Create, share, and monetize your knowledge.",
      image_url: "/images/carousel/skillchain.png",
      url: "https://example.com/django-models"
    },
    {
      title: "Your Dex, Your Rules Your Community",
      body: "PupSwap is a seamless decentralized exchange built on Cypherium.",
      image_url: "/images/carousel/pupswap.png",
      url: "https://example.com/react-performance"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showArrows, setShowArrows] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection for hiding arrows
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide arrows
        setShowArrows(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show arrows
        setShowArrows(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className={`relative w-full group ${className} flex items-center justify-center`}>
      {/* Main carousel container */}
      <div className="relative w-full max-w-7xl mx-auto h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 h-full px-4 md:px-8 py-4 absolute inset-0 items-center"
          >
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center text-white px-4 lg:px-0 text-center lg:text-left">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {currentSlide.platform && (
                  <motion.div 
                    className="text-sm uppercase tracking-wide opacity-75"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {currentSlide.platform}
                  </motion.div>
                )}
                
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-primary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {currentSlide.title}
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg lg:text-xl opacity-90 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {currentSlide.body}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary text-black hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 font-normal cursor-pointer rounded-sm w-full sm:w-fit group"
                      onClick={() => window.open(currentSlide.url, '_blank')}
                    >
                      <span className="flex items-center gap-2">
                        Learn More
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="flex items-center justify-center h-64 sm:h-80 lg:h-[70%] lg:flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.div 
                className="relative w-full h-full max-w-xl sm:max-w-2xl lg:w-auto lg:h-full aspect-square sm:aspect-4/3 lg:aspect-auto"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={currentSlide.image_url}
                  alt={currentSlide.title}
                  width={871}
                  height={653}
                  className="object-contain w-full h-full lg:w-auto lg:h-full lg:max-w-full"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    // Fallback for broken image
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Chama+Phones`;
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows - positioned at page edges */}
        <motion.div 
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0.8, x: 0 }}
          animate={{ opacity: showArrows ? 0.8 : 0 }}
          whileHover={{ opacity: showArrows ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showArrows ? 'auto' : 'none' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-10 sm:h-12 md:h-16 w-6 sm:w-8 md:w-12 rounded-none bg-primary hover:bg-primary/80 text-black border-r border-primary/50 hover:border-primary backdrop-blur-sm shadow-lg transition-all duration-300"
              onClick={goToPrevious}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(autoPlay)}
            >
              <ChevronLeft className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0.8, x: 0 }}
          animate={{ opacity: showArrows ? 0.8 : 0 }}
          whileHover={{ opacity: showArrows ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showArrows ? 'auto' : 'none' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"  
              className="h-10 sm:h-12 md:h-16 w-6 sm:w-8 md:w-12 rounded-none bg-primary hover:bg-primary/80 text-black border-l border-primary/50 hover:border-primary backdrop-blur-sm shadow-lg transition-all duration-300"
              onClick={goToNext}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(autoPlay)}
            >
              <ChevronRight className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Play/pause button */}
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <motion.span
                key={isPlaying ? 'pause' : 'play'}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide counter - Desktop */}
      <motion.div 
        className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentIndex + 1} / {slides.length}
        </motion.span>
      </motion.div>
    </div>
  );
}