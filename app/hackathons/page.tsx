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
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Code, Trophy, Users, Calendar, Lightbulb, Gift, Target, Zap } from "lucide-react";
import { emailService } from "@/lib/emailService";

export default function HackathonsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        teamName: "",
        teamSize: "",
        projectIdea: "",
        experienceLevel: "",
        technologies: "",
        agreeToTerms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            agreeToTerms: checked,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Validate required fields
            if (
                !formData.fullName ||
                !formData.email ||
                !formData.teamName ||
                !formData.projectIdea ||
                !formData.agreeToTerms
            ) {
                alert("Please fill in all required fields and agree to the terms.");
                setIsLoading(false);
                return;
            }

            // Send email using email service
            const response = await emailService.sendHackathonApplicationEmail({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                teamName: formData.teamName,
                teamSize: formData.teamSize,
                projectIdea: formData.projectIdea,
                experienceLevel: formData.experienceLevel,
                technologies: formData.technologies,
            });

            if (response.success) {
                alert("Thank you for your hackathon application! We'll review it and get back to you soon.");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    teamName: "",
                    teamSize: "",
                    projectIdea: "",
                    experienceLevel: "",
                    technologies: "",
                    agreeToTerms: false,
                });
            } else {
                alert(`Error: ${response.error || "Failed to submit application"}`);
            }
        } catch (error) {
            console.error("Hackathon application error:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
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
                                MUIAA Hackathons
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Build the Future
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Creating real-world blockchain solutions
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Join developers, designers, and innovators in creating real-world blockchain solutions for African communities. Win prizes, gain mentorship, and showcase your skills!
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 md:mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="#apply" className="w-full sm:w-auto">
                                    <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(243,193,66,0.3)] hover:shadow-[0_0_40px_rgba(243,193,66,0.5)] transition-all duration-300">
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </a>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/solutions" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-black hover:text-white"
                                    >
                                        View Past Projects
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </motion.div>
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

            {/* Why Join Section */}
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
                            Why Join Our Hackathons?
                        </h2>
                        <p className="typo-subtle">Experience innovation, learning, and community</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Trophy, title: "Win Prizes", description: "Compete for cash prizes, funding opportunities, and exclusive partnerships", delay: 0.1 },
                            { icon: Users, title: "Network & Collaborate", description: "Meet like-minded developers, mentors, and potential co-founders", delay: 0.2 },
                            { icon: Lightbulb, title: "Learn & Grow", description: "Workshops, mentorship sessions, and hands-on blockchain development", delay: 0.3 },
                            { icon: Target, title: "Real Impact", description: "Build solutions that solve real problems for African communities", delay: 0.4 },
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

            {/* Hackathon Details Section */}
            <section className="relative section-padding bg-black border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 mb-3">
                            What to Expect
                        </h2>
                        <p className="typo-subtle">Our hackathons are designed for maximum learning and impact</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "48-Hour Sprint", description: "Intensive development period with team collaboration and mentor support", points: ["Team formation", "Development workspace", "24/7 mentor access"], delay: 0.1 },
                            { title: "Expert Mentorship", description: "Learn from MUIAA engineers and blockchain industry leaders", points: ["Technical workshops", "One-on-one guidance", "Code reviews"], delay: 0.2 },
                            { title: "Prizes & Recognition", description: "Win funding, partnerships, and accelerator opportunities", points: ["Cash prizes up to $10K", "Incubation program", "Media coverage"], delay: 0.3 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: item.delay }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                                    <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-gray-300 mb-6 flex-1">{item.description}</p>
                                    <ul className="space-y-2">
                                        {item.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm">
                                                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
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
            <section id="apply" className="relative section-padding bg-black border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 md:p-8 bg-black/50 border-primary/20 backdrop-blur-sm">
                            <div className="text-center mb-8">
                                <h2 className="typo-h3 mb-2">Apply for Hackathon</h2>
                                <p className="typo-subtle">Join us on an exciting journey of innovation and development</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        Personal Information
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                                                Full Name *
                                            </Label>
                                            <Input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                disabled={isLoading}
                                                className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                                placeholder="John Doe"
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
                                                placeholder="john@example.com"
                                            />
                                        </div>
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
                                            placeholder="+254..."
                                        />
                                    </div>
                                </div>

                                {/* Team Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        Team Information
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="teamName" className="block text-sm font-semibold text-white mb-2">
                                                Team Name *
                                            </Label>
                                            <Input
                                                type="text"
                                                id="teamName"
                                                name="teamName"
                                                value={formData.teamName}
                                                onChange={handleChange}
                                                required
                                                disabled={isLoading}
                                                className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                                placeholder="Your awesome team"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="teamSize" className="block text-sm font-semibold text-white mb-2">
                                                Team Size
                                            </Label>
                                            <Select
                                                value={formData.teamSize}
                                                onValueChange={(value) => handleSelectChange("teamSize", value)}
                                                disabled={isLoading}
                                            >
                                                <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                    <SelectValue placeholder="Select team size" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-black border-primary/20">
                                                    <SelectItem value="1">1 (Individual)</SelectItem>
                                                    <SelectItem value="2-3">2-3 Members</SelectItem>
                                                    <SelectItem value="4-5">4-5 Members</SelectItem>
                                                    <SelectItem value="6+">6+ Members</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5" />
                                        Project Details
                                    </h3>

                                    <div>
                                        <Label htmlFor="projectIdea" className="block text-sm font-semibold text-white mb-2">
                                            Project Idea *
                                        </Label>
                                        <Textarea
                                            id="projectIdea"
                                            name="projectIdea"
                                            value={formData.projectIdea}
                                            onChange={handleChange}
                                            required
                                            disabled={isLoading}
                                            rows={5}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50 resize-none"
                                            placeholder="Describe your project idea, what problem does it solve?"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="experienceLevel" className="block text-sm font-semibold text-white mb-2">
                                                Experience Level
                                            </Label>
                                            <Select
                                                value={formData.experienceLevel}
                                                onValueChange={(value) => handleSelectChange("experienceLevel", value)}
                                                disabled={isLoading}
                                            >
                                                <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                    <SelectValue placeholder="Select experience level" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-black border-primary/20">
                                                    <SelectItem value="beginner">Beginner</SelectItem>
                                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                                    <SelectItem value="advanced">Advanced</SelectItem>
                                                    <SelectItem value="expert">Expert</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label htmlFor="technologies" className="block text-sm font-semibold text-white mb-2">
                                                Technologies/Stack
                                            </Label>
                                            <Input
                                                type="text"
                                                id="technologies"
                                                name="technologies"
                                                value={formData.technologies}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                                className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                                placeholder="React, Node.js, Web3, etc."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <Checkbox
                                        id="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onCheckedChange={handleCheckboxChange}
                                        disabled={isLoading}
                                        className="border-primary/20 mt-1"
                                    />
                                    <label htmlFor="agreeToTerms" className="text-sm text-gray-300 cursor-pointer">
                                        I agree to the hackathon terms and conditions and consent to sharing my information with MUIAA and partners *
                                    </label>
                                </div>

                                <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-black hover:bg-primary/90" disabled={isLoading}>
                                    <Code className="w-4 h-4" />
                                    {isLoading ? "Submitting..." : "Submit Application"}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </section>
            <MainFooter />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

