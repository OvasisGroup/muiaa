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
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { emailService } from "@/lib/emailService";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Validate required fields
            if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
                alert("Please fill in all required fields");
                setIsLoading(false);
                return;
            }

            // Send email using email service
            const response = await emailService.sendContactEmail(formData);

            if (response.success) {
                alert("Thank you for your message! We'll get back to you soon.");
                setFormData({ name: "", email: "", organization: "", message: "" });
            } else {
                alert(`Error: ${response.error || "Failed to send message"}`);
            }
        } catch (error) {
            console.error("Contact form error:", error);
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
                                Get in Touch
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Let&apos;s Connect
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Collaborate to build the future
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Let&apos;s collaborate to build the future of blockchain in Africa. Reach out to learn more about our solutions, partnerships, or opportunities.
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

            {/* Contact Info & Form Section */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8 mb-12 md:mb-20">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            {[
                                { icon: MapPin, title: "Nairobi, Kenya", content: "TBC", delay: 0.1 },
                                { icon: MapPin, title: "Phoenix, Arizona", content: "TBC", delay: 0.2 },
                                { icon: Mail, title: "Email", content: "info@muiaa.com", link: "mailto:info@muiaa.com", delay: 0.3 },
                                { icon: Phone, title: "Phone", content: ["Kenya: +254 718 540 760", "USA: +1 480 555 0199"], delay: 0.4 },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: item.delay }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="p-6 md:p-8 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                                                <item.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                                {Array.isArray(item.content) ? (
                                                    <div className="space-y-1">
                                                        {item.content.map((line, i) => (
                                                            <p key={i} className="text-sm text-gray-300">{line}</p>
                                                        ))}
                                                    </div>
                                                ) : item.link ? (
                                                    <a href={item.link} className="text-sm text-primary hover:underline">
                                                        {item.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm text-gray-300">{item.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 md:p-8 bg-black/50 border-primary/20 backdrop-blur-sm">
                                <h2 className="typo-h3 text-white mb-2">Send us a Message</h2>
                                <p className="typo-subtle mb-8">We&apos;ll get back to you as soon as possible</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
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

                                    <div>
                                        <Label htmlFor="organization" className="block text-sm font-semibold text-white mb-2">
                                            Organization
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
                                        <Label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                                            Message *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            rows={5}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50 resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-black hover:bg-primary/90" disabled={isLoading}>
                                        <Send className="w-4 h-4" />
                                        {isLoading ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Department Contact Cards */}
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
                            Reach the Right Team
                        </h2>
                        <p className="typo-subtle">Contact specific departments based on your needs</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Careers & Recruitment", email: "careers@muiaa.com", description: "Join our team and help us build the future" },
                            { title: "Partnerships & Collaborations", email: "partners@muiaa.com", description: "Explore partnership and collaboration opportunities" },
                            { title: "Investment & Fundraising", email: "invest@muiaa.com", description: "Investment opportunities and funding inquiries" },
                            { title: "Developer Access", email: "dev@muiaa.com", description: "API access, SDKs, and developer resources" },
                            { title: "Media & Press", email: "media@muiaa.com", description: "Press releases, media inquiries, and interviews" },
                            { title: "Compliance & Legal", email: "compliance@muiaa.com", description: "Regulatory and compliance-related inquiries" },
                        ].map((dept, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm">
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {dept.title}
                                    </h4>
                                    <p className="text-sm text-gray-300 mb-4">{dept.description}</p>
                                    <a href={`mailto:${dept.email}`} className="text-primary hover:underline text-sm font-semibold">
                                        {dept.email}
                                    </a>
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
                    <h2 className="typo-h2 mb-4 text-white">
                        Explore Our Ecosystem
                    </h2>
                    <p className="typo-body text-gray-300 mb-8 max-w-2xl mx-auto">
                        Discover how MUIAA is transforming African communities through blockchain and AI innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/about">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                Learn About Us
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                View Solutions
                                <ArrowRight className="w-4 h-4" />
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
