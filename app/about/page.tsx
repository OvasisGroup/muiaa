"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainFooter from "@/components/mainfooter";
import ScrollToTop from "@/components/scroll-to-top";
import { Team } from "@/components/team";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Rocket, Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 md:pt-16 pb-12 mt-5 md:pb-16 bg-black">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

                    {/* Animated Gradient Orbs */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />

                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(243,193,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(243,193,66,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Accent Line */}
                        <motion.div
                            className="flex items-center justify-center gap-3 mb-8 md:mb-12"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/60 max-w-xs" />
                            <motion.div
                                className="w-2 h-2 bg-primary rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/60 max-w-xs" />
                        </motion.div>

                        {/* Main Heading with Staggered Animation */}
                        <motion.h1
                            className="typo-h1 xl:text-8xl mb-6 md:mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.span
                                className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent text-md"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Empowering Africa
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent text-md"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Through Innovation
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Building blockchain and AI solutions that transform communities
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            MUIAA Ltd is a Kenyan-American technology company committed to democratizing financial access and creating transparent, ethical digital ecosystems for underserved communities across Africa and beyond.
                        </motion.p>

                        {/* Stats Section */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            {[
                                { number: "4+", label: "Blockchain Platforms" },
                                { number: "6+", label: "Live Solutions" },
                                { number: "200+", label: "Users Empowered" },
                                { number: "2", label: "Countries" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-gray-500"
                    >
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1 h-2 bg-primary rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Mission, Vision, Values Section */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 mb-3">
                            Our Foundation
                        </h2>
                        <p className="typo-subtle">The principles that guide our mission and vision</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-black border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    To democratize financial access and create transparent, ethical, and scalable digital ecosystems that uplift African communities.
                                </p>
                            </Card>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-black border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    To be Africa&apos;s leading blockchain and AI company, building trust-based solutions that respect cultural values while scaling globally.
                                </p>
                            </Card>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-black border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Our Values</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>Innovation & Excellence</li>
                                    <li>Integrity & Transparency</li>
                                    <li>Inclusivity & Community</li>
                                    <li>Scalability & Impact</li>
                                </ul>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Core Principles */}
                    <motion.div
                        className="section-header-spacing md:mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 text-center mb-2">Core Principles</h2>
                        <p className="typo-subtle text-center mb-8">What guides everything we do</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Zap,
                                    title: "Innovation",
                                    description: "Future-ready technology rooted in African realities and community needs.",
                                },
                                {
                                    icon: Shield,
                                    title: "Security",
                                    description: "Enterprise-grade security with transparent, audited smart contracts.",
                                },
                                {
                                    icon: Rocket,
                                    title: "Scalability",
                                    description: "Local-first solutions designed to scale across borders.",
                                },
                                {
                                    icon: Heart,
                                    title: "Community",
                                    description: "Co-creating with users, not just for them. Impact-driven and community-owned.",
                                },
                            ].map((principle, idx) => {
                                const Icon = principle.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="p-6 md:p-8 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group h-full backdrop-blur-sm">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white text-lg mb-2">{principle.title}</h4>
                                                    <p className="text-gray-300">{principle.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* SDG Alignment */}
            <section className="relative section-padding bg-black border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                            UN Sustainable Development Goals
                        </h2>
                        <p className="text-gray-400 text-lg">Our work supports the global agenda for sustainable development</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { goal: "SDG 1", title: "No Poverty", desc: "Financial inclusion through blockchain-powered platforms" },
                            { goal: "SDG 4", title: "Quality Education", desc: "Digital literacy and Web3 skills through SkillChain" },
                            { goal: "SDG 8", title: "Decent Work & Economic Growth", desc: "Employment opportunities in the digital economy" },
                            { goal: "SDG 11", title: "Sustainable Cities", desc: "Community-focused solutions for urban areas" },
                            { goal: "SDG 13", title: "Climate Action", desc: "Environmental impact with BebaPay recycling rewards" },
                            { goal: "SDG 17", title: "Partnerships", desc: "Collaborative ecosystem with NGOs, governments, and communities" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm h-full">
                                    <div className="mb-3 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-sm">
                                        {item.goal}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-300">{item.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden section-padding-medium bg-black border-t border-primary/10 my-12 md:my-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 opacity-20" />
                </div>

                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Join Our Mission
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re a developer, entrepreneur, investor, or community leader, there&apos;s a place for you in our ecosystem.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/solutions">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                Explore Solutions
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 text-center text-black w-full sm:w-auto hover:text-white">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <MainFooter />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

