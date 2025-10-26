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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section className={`bg-black py-32 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Technologies We Use
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Building on leading blockchain platforms for secure, scalable solutions
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              variants={cardVariants}
              className="bg-black border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-primary/30"
            >
              {/* Platform Icon */}
              <div className="mb-3">
                <div className="w-20 h-20 relative mb-3 border border-gray-600 rounded-full p-3">
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                  {platform.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {platform.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}