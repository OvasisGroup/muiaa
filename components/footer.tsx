"use client";

import React from "react";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-black text-white py-8 px-4 border-t border-gray-700/30 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* First Line - Copyright and Offices */}
          <motion.p 
            className="text-sm text-gray-500 opacity-70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Copyright © 2025 MUIAA Ltd. All rights reserved. | Offices: Nairobi, Kenya & Phoenix, Arizona
          </motion.p>
          
          {/* Second Line - Company Description */}
          <motion.p 
            className="text-sm text-gray-500 opacity-70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MUIAA is dedicated to empowering Africa through blockchain, AI, and ethical innovation. We build solutions that drive financial inclusion, skill development, and sustainable economic growth across the continent.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}