"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

interface MainFooterProps {
  className?: string;
}

export default function MainFooter({ className = "" }: MainFooterProps) {
  interface FooterLink {
    name: string;
    href: string;
    icon?: 'linkedin' | 'twitter';
  }

  interface FooterSection {
    title: string;
    links: FooterLink[];
  }

  const footerSections: FooterSection[] = [
    {
      title: "Solutions",
      links: [
        { name: "Chama Connect", href: "#chama-connect" },
        { name: "SkillChain", href: "#skillchain" },
        { name: "MUIAA Feeds", href: "#muiaa-feeds" },
        { name: "BebaPay", href: "#bebapay" },
        { name: "PupSwap", href: "#pupswap" },
        { name: "HEP – Home Equity Partnership", href: "#hep" },
      ]
    },
    {
      title: "Platforms",
      links: [
        { name: "Blockchain Infrastructure", href: "#blockchain" },
        { name: "AI Innovation Hub", href: "#ai-hub" },
        { name: "Developer Tools", href: "#dev-tools" },
        { name: "Community Programs", href: "#community" },
        { name: "Hackathons", href: "#hackathons" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Partners", href: "#partners" },
        { name: "Careers", href: "#careers" },
        { name: "Team", href: "#team" },
        { name: "Blog & Insights", href: "#blog" },
        { name: "Contact Us", href: "#contact" },
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Invest", href: "#invest" },
        { name: "Partnerships", href: "#partnerships" },
        { name: "Volunteer", href: "#volunteer" },
        { name: "Apply for Hackathon", href: "#apply-hackathon" },
        { name: "Newsletter", href: "#newsletter" },
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com/company/muiaa", icon: "linkedin" },
        { name: "X / Twitter", href: "https://twitter.com/muiaa", icon: "twitter" },
      ]
    }
  ];

  return (
    <footer className={`bg-black text-white py-16 px-8 md:px-12 lg:px-16 border-t border-gray-700/30 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-base font-semibold text-primary mb-4 leading-tight">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (sectionIndex * 0.1) + (linkIndex * 0.05) 
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs py-1 flex items-center gap-2 leading-tight"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.icon === 'linkedin' && <Linkedin className="h-4 w-4" />}
                      {link.icon === 'twitter' && <Twitter className="h-4 w-4" />}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}