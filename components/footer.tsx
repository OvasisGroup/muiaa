"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Partners", href: "/partners" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Contact", href: "/contact" },
  ];

  const applyLinks = [
    { name: "Invest", href: "/apply/invest" },
    { name: "Careers", href: "/apply/careers" },
    { name: "Partner With Us", href: "/apply/partners" },
  ];

  // Key solution destinations - link to slug pages
  const solutionLinks = [
    { name: "Chama Connect", href: "/solutions/chamaconnect" },
    { name: "SkillChain", href: "/solutions/skillchain" },
    { name: "MUIAA Feeds", href: "/solutions/muiaa-feeds" },
    { name: "BebaPay", href: "/solutions/bebapay" },
    { name: "PupSwap", href: "/solutions/pupswap" },
    { name: "HEP", href: "/solutions/hep" },
  ];

  return (
    <footer className={`bg-black text-white py-8 px-4 border-t border-gray-700/30 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <span className="text-gray-700">|</span>
            {applyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Solution Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-xs text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="text-gray-500 mr-1">Solutions:</span>
            {solutionLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                {idx > 0 && <span className="text-gray-700">|</span>}
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Copyright and Offices */}
          <motion.p
            className="text-center text-sm text-gray-500 opacity-70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Copyright © 2025 MUIAA Ltd. All rights reserved. | Offices: Nairobi, Kenya & Phoenix, Arizona
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}