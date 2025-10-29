"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface OpportunitiesProps {
  className?: string;
}

export default function Opportunities({ className = "" }: OpportunitiesProps) {
  const opportunities = [
    {
      id: "01",
      title: "Invest",
      subtitle: "Support our mission by investing in innovative blockchain projects.",
      description: "Be part of the next generation of blockchain innovation across Africa.",
      buttonText: "Invest Now"
    },
    {
      id: "02",
      title: "Careers",
      subtitle: "Join our team and help shape the future of African tech.",
      description: "We're hiring passionate developers, designers, and product enthusiasts.",
      buttonText: "View Openings"
    },
    {
      id: "03",
      title: "Partners",
      subtitle: "Collaborate with us through partnerships and community programs.",
      description: "Whether you're a developer, organization, or ecosystem partner, there's a role for you.",
      buttonText: "Partner With Us"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className={`bg-black py-12 md:py-24 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Involved
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join us in building the future of blockchain technology across Africa
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {opportunities.map((opportunity) => (
            <motion.div
              key={opportunity.id}
              variants={cardVariants}
              className="bg-black border border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-primary/30"
            >
              {/* Number */}
              <div className="mb-6">
                <span className="text-primary text-6xl font-bold opacity-20">
                  {opportunity.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-200">
                {opportunity.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                {opportunity.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {opportunity.description}
              </p>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={
                    opportunity.title === "Invest"
                      ? "/apply/invest"
                      : opportunity.title === "Careers"
                        ? "/apply/careers"
                        : "/apply/partners"
                  }
                >
                  <Button
                    className="bg-primary hover:bg-primary/90 text-black font-medium px-6 py-3 rounded-sm cursor-pointer flex items-center gap-2 w-fit"
                  >
                    {opportunity.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}