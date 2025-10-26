"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HackathonProps {
  className?: string;
}

export default function Hackathon({ className = "" }: HackathonProps) {
  return (
    <section className={`bg-black py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black border border-gray-700 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Left div - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 lg:p-12 flex flex-col justify-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Apply for Our Open Hackathons
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                Join a community of passionate developers building the future of blockchain. 
                Our hackathons provide the perfect platform to learn, innovate, and showcase 
                your skills while building real-world applications.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-black font-medium px-8 py-3 rounded-sm cursor-pointer flex items-center gap-2 w-fit"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right div - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative min-h-[300px] lg:min-h-[400px]"
            >
              <Image
                src="/images/hackathon.jpg"
                alt="Hackathon participants coding together"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent lg:hidden"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}