"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlockchainCard {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: string;
}

interface BlockchainPlatformsProps {
  className?: string;
}

export default function BlockchainPlatforms({ className = "" }: BlockchainPlatformsProps) {
  const platforms: BlockchainCard[] = [
    {
      id: 1,
      name: "Cypherium",
      title: "Cypherium",
      description: "High-performance blockchain platform with fast transactions and low fees for enterprise applications.",
      icon: "/images/crypto/cypherium.jpeg"
    },
    {
      id: 2,
      name: "Avalanche",
      title: "Avalanche",
      description: "Robust platform enabling rapid finality and high throughput for scalable DeFi solutions.",
      icon: "/images/crypto/avalanche.png"
    },
    {
      id: 3,
      name: "Cardano",
      title: "Cardano",
      description: "Peer-reviewed blockchain platform prioritizing sustainability and interoperability with academic rigor.",
      icon: "/images/crypto/cardano.png"
    },
    {
      id: 4,
      name: "Base",
      title: "Base",
      description: "Developer-friendly blockchain built on Ethereum providing secure and affordable way to build decentralized apps.",
      icon: "/images/crypto/base.png"
    }
  ];



  return (
    <section className={`bg-black py-16 md:py-32 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            The Technologies We Use
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Building on leading blockchain platforms for secure, scalable solutions
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                scale: 1,
                transition: {
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-black border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:border-primary/50 cursor-pointer overflow-hidden relative"
            >
              {/* Background Gradient Overlay */}
<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Platform Icon */}
              <div className="mb-3 relative z-10">
                <motion.div 
                  className="w-20 h-20 relative mb-3 border border-gray-600 rounded-full p-3 group-hover:border-primary/40 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }}
                >
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    fill
                    className="object-contain rounded-full transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-white group-hover:text-primary transition-all duration-500"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {platform.title}
                </motion.h3>
              </div>

              {/* Description */}
              <motion.p 
                className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-500 relative z-10"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {platform.description}
              </motion.p>

              {/* Learn More Link */}
              <div className="mt-4 pt-4 border-t border-gray-700 group-hover:border-gray-600 transition-all duration-500 relative z-10">
                <motion.button 
                  className="text-primary font-medium text-sm hover:text-primary/80 transition-all duration-300 flex items-center gap-1"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More 
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}