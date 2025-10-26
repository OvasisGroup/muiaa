"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import MainFooter from "@/components/mainfooter";
import Newsletter from "@/components/newsletter";
import NewsInsights from "@/components/news-insights";
import Hackathon from "@/components/hackathon";
import VideoSection from "@/components/video-section";
import BlockchainPlatforms from "@/components/blockchain-platforms";
import FeaturedSolutions from "@/components/featured-solutions";
import Opportunities from "@/components/opportunities";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        showCarousel={true}
      />
      
      <BlockchainPlatforms />
      <FeaturedSolutions />
      <Opportunities />
      <VideoSection />
      <Hackathon />
      <NewsInsights />
      <Newsletter />

      <MainFooter />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
