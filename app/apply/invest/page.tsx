"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainFooter from "@/components/mainfooter";
import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingUp, Globe, Shield, Users } from "lucide-react";
import { emailService } from "@/lib/emailService";

export default function ApplyInvestPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        phone: "",
        investmentType: "",
        investmentAmount: "",
        timeline: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Validate required fields
            if (!formData.name.trim() || !formData.email.trim() || !formData.investmentType || !formData.investmentAmount) {
                alert("Please fill in all required fields");
                setIsLoading(false);
                return;
            }

            // Send email using email service
            const response = await emailService.sendInvestmentApplicationEmail({
                name: formData.name,
                email: formData.email,
                organization: formData.organization,
                phone: formData.phone,
                investmentType: formData.investmentType,
                investmentAmount: formData.investmentAmount,
                timeline: formData.timeline,
                message: formData.message,
            });

            if (response.success) {
                alert("Thank you for your investment inquiry! We'll be in touch soon.");
                setFormData({
                    name: "",
                    email: "",
                    organization: "",
                    phone: "",
                    investmentType: "",
                    investmentAmount: "",
                    timeline: "",
                    message: "",
                });
            } else {
                alert(`Error: ${response.error || "Failed to submit inquiry"}`);
            }
        } catch (error) {
            console.error("Investment inquiry error:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                                className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Invest in Africa&apos;s
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Future
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Building scalable, ethical solutions
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Join us in building scalable, ethical blockchain solutions that empower African communities and drive sustainable economic growth.
                        </motion.p>
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

            {/* Why Invest Section */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 text-white mb-3">
                            Why Invest in MUIAA?
                        </h2>
                        <p className="typo-subtle">Strategic opportunities in Africa's blockchain economy</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: TrendingUp, title: "Growing Market", description: "Africa's blockchain market is projected to grow by over 30% annually", delay: 0.1 },
                            { icon: Globe, title: "Continental Reach", description: "Operating across Kenya, Zanzibar, and expanding to more African markets", delay: 0.2 },
                            { icon: Shield, title: "Proven Track Record", description: "Award-winning solutions deployed in real-world scenarios with measurable impact", delay: 0.3 },
                            { icon: Users, title: "Social Impact", description: "Financial inclusion and sustainable development aligned with UN SDGs", delay: 0.4 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: item.delay }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm h-full">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Opportunities Section */}
            <section className="relative section-padding bg-black border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 text-white mb-3">
                            Investment Opportunities
                        </h2>
                        <p className="typo-subtle">Multiple ways to support and benefit from our growth</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "Equity Investment", description: "Direct equity stake in MUIAA Ltd with board representation opportunities for significant investments", points: ["Long-term growth potential", "Board participation available", "Quarterly reporting"], delay: 0.1 },
                            { title: "Project Funding", description: "Fund specific solutions or pilots with measurable ROI and social impact metrics", points: ["Clear ROI metrics", "Social impact reporting", "Co-branding opportunities"], delay: 0.2 },
                            { title: "Strategic Partnerships", description: "Collaborate on joint ventures, technical innovation, or market expansion initiatives", points: ["Joint development", "IP co-ownership", "Market expansion support"], delay: 0.3 },
                        ].map((opportunity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: opportunity.delay }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                                    <h3 className="text-2xl font-bold text-primary mb-3">{opportunity.title}</h3>
                                    <p className="text-gray-300 mb-6 flex-1">{opportunity.description}</p>
                                    <ul className="space-y-2">
                                        {opportunity.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm">
                                                <span className="text-primary">✓</span>
                                                <span className="text-gray-400">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="relative section-padding bg-black border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 md:p-8 bg-black/50 border-primary/20 backdrop-blur-sm">
                            <h2 className="typo-h3 text-white mb-2">Investment Inquiry Form</h2>
                            <p className="typo-subtle mb-8">Tell us about your investment interests and we&apos;ll schedule a discussion</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                                            Full Name *
                                        </Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                                            Email Address *
                                        </Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="organization" className="block text-sm font-semibold text-white mb-2">
                                            Organization/Fund
                                        </Label>
                                        <Input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                            placeholder="Your organization"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                                            Phone Number
                                        </Label>
                                        <Input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                            placeholder="+1 234 567 8900"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="investmentType" className="block text-sm font-semibold text-white mb-2">
                                            Investment Type *
                                        </Label>
                                        <Select
                                            value={formData.investmentType}
                                            onValueChange={(value) => handleSelectChange("investmentType", value)}
                                            disabled={isLoading}
                                        >
                                            <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                <SelectValue placeholder="Select investment type" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black border-primary/20">
                                                <SelectItem value="equity">Equity Investment</SelectItem>
                                                <SelectItem value="project">Project Funding</SelectItem>
                                                <SelectItem value="strategic">Strategic Partnership</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="investmentAmount" className="block text-sm font-semibold text-white mb-2">
                                            Investment Range *
                                        </Label>
                                        <Select
                                            value={formData.investmentAmount}
                                            onValueChange={(value) => handleSelectChange("investmentAmount", value)}
                                            disabled={isLoading}
                                        >
                                            <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                <SelectValue placeholder="Select investment range" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black border-primary/20">
                                                <SelectItem value="under-100k">Under $100K</SelectItem>
                                                <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                                                <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                                                <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                                                <SelectItem value="over-5m">Over $5M</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
                                        Investment Timeline
                                    </Label>
                                    <Select
                                        value={formData.timeline}
                                        onValueChange={(value) => handleSelectChange("timeline", value)}
                                        disabled={isLoading}
                                    >
                                        <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                            <SelectValue placeholder="Select timeline" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-black border-primary/20">
                                            <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                                            <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                                            <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                                            <SelectItem value="long">Long-term (12+ months)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                                        Additional Information
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        rows={5}
                                        className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50 resize-none"
                                        placeholder="Tell us about your investment goals, areas of interest, or any questions you have..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-black hover:bg-primary/90" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit Investment Inquiry"}
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
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
                    <h2 className="typo-h2 mb-4 text-white">
                        Have Questions?
                    </h2>
                    <p className="typo-body text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our investment team directly at <a href="mailto:invest@muiaa.com" className="text-primary hover:underline">invest@muiaa.com</a>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/about">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                Learn More About Us
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                                View Our Solutions
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
