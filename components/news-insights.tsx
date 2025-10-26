"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

interface NewsInsightsProps {
  className?: string;
}

export default function NewsInsights({ className = "" }: NewsInsightsProps) {
  // Sample news data - in a real app, this would come from an API or CMS
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "The Future of Blockchain Technology in Africa",
      excerpt: "Exploring how blockchain is transforming financial services and governance across the African continent.",
      image: "/images/news/blockchain.jpg",
      author: "Dr. Amara Thompson",
      date: "October 25, 2025",
      category: "Blockchain",
      slug: "future-blockchain-africa"
    },
    {
      id: 2,
      title: "AI-Driven Solutions for Agricultural Innovation",
      excerpt: "How artificial intelligence is revolutionizing farming practices and crop management in developing regions.",
      image: "/images/news/ai.jpg",
      author: "Prof. Kwame Asante",
      date: "October 22, 2025",
      category: "Artificial Intelligence",
      slug: "ai-agricultural-innovation"
    },
    {
      id: 3,
      title: "Sustainable Tech: Green Energy Solutions",
      excerpt: "Innovative approaches to renewable energy adoption and environmental sustainability in technology.",
      image: "/images/news/sus_tech.jpg",
      author: "Sarah Mitchell",
      date: "October 20, 2025",
      category: "Sustainability",
      slug: "sustainable-tech-green-energy"
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

  const itemVariants = {
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
    <section className={`bg-white py-12 md:py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with our latest articles on technology, innovation, and industry trends.
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <Link href={`/news/${item.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-black text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Meta information */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}