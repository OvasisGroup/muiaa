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
import { ArrowRight, Briefcase, Users, Globe, Heart, Code, Zap, Target } from "lucide-react";
import { emailService } from "@/lib/emailService";

export default function ApplyCareersPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        location: "",
        availability: "",
        skills: [] as string[],
        portfolio: "",
        coverLetter: "",
        agreeToTerms: false,
    });

    const skillsOptions = [
        "React",
        "TypeScript",
        "Node.js",
        "Web3/Blockchain",
        "Smart Contracts",
        "Full Stack Development",
        "Mobile Development",
        "UI/UX Design",
        "Product Management",
        "DevOps",
    ];

    const jobPositions = [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Smart Contract Developer",
        "DevOps Engineer",
        "UI/UX Designer",
        "Product Manager",
        "Data Analyst",
        "Community Manager",
        "Other",
    ];

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

    const handleSkillChange = (skill: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            skills: checked
                ? [...prev.skills, skill]
                : prev.skills.filter((s) => s !== skill),
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
                !formData.position ||
                !formData.coverLetter ||
                !formData.agreeToTerms
            ) {
                alert("Please fill in all required fields and agree to the terms.");
                setIsLoading(false);
                return;
            }

            // Send email using email service
            const response = await emailService.sendCareerApplicationEmail({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                position: formData.position,
                experience: formData.experience,
                location: formData.location,
                availability: formData.availability,
                skills: formData.skills,
                portfolio: formData.portfolio,
                coverLetter: formData.coverLetter,
            });

            if (response.success) {
                alert("Thank you for your application! We'll review it and get back to you soon.");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    position: "",
                    experience: "",
                    location: "",
                    availability: "",
                    skills: [],
                    portfolio: "",
                    coverLetter: "",
                    agreeToTerms: false,
                });
            } else {
                alert(`Error: ${response.error || "Failed to submit application"}`);
            }
        } catch (error) {
            console.error("Career application error:", error);
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
                                Build the Future
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                With Us
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Democratizing financial access across Africa
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Join our mission to democratize financial access across Africa through blockchain innovation. Be part of a team that&apos;s building transformative solutions for underserved communities.
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

            {/* Why Join MUIAA Section */}
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
                            Why Join MUIAA?
                        </h2>
                        <p className="typo-subtle">Experience impact-driven work in a global team</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: "Meaningful Work", description: "Build solutions that directly impact millions of underserved communities", delay: 0.1 },
                            { icon: Globe, title: "Remote-First Culture", description: "Work from anywhere with flexible schedules and collaborative tools", delay: 0.2 },
                            { icon: Zap, title: "Cutting-Edge Tech", description: "Work with blockchain, AI, and emerging technologies across multiple platforms", delay: 0.3 },
                            { icon: Heart, title: "Growth & Learning", description: "Professional development, mentorship, and continuous learning opportunities", delay: 0.4 },
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

            {/* Open Positions Section */}
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
                            Open Positions
                        </h2>
                        <p className="typo-subtle">We're currently looking for talented individuals in these roles</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Full Stack Developer", department: "Engineering", location: "Remote", type: "Full-time", delay: 0.1 },
                            { title: "Smart Contract Developer", department: "Blockchain", location: "Remote", type: "Full-time", delay: 0.2 },
                            { title: "UI/UX Designer", department: "Design", location: "Remote", type: "Full-time", delay: 0.3 },
                            { title: "Product Manager", department: "Product", location: "Nairobi/Remote", type: "Full-time", delay: 0.4 },
                            { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-time", delay: 0.5 },
                            { title: "Community Manager", department: "Marketing", location: "Nairobi", type: "Full-time", delay: 0.6 },
                        ].map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: position.delay }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                                                {position.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">{position.department}</p>
                                        </div>
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-300">
                                        <span className="flex items-center gap-1">
                                            <Globe className="w-4 h-4" />
                                            {position.location}
                                        </span>
                                        <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">
                                            {position.type}
                                        </span>
                                    </div>
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
                            <h2 className="typo-h3 text-white mb-2">Apply for a Position</h2>
                            <p className="typo-subtle mb-8">Fill out the form below and we&apos;ll get back to you soon</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div className="grid md:grid-cols-2 gap-6">
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
                                            placeholder="Your full name"
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

                                {/* Position Details */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="position" className="block text-sm font-semibold text-white mb-2">
                                            Position Applied For *
                                        </Label>
                                        <Select
                                            value={formData.position}
                                            onValueChange={(value) => handleSelectChange("position", value)}
                                            disabled={isLoading}
                                        >
                                            <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                <SelectValue placeholder="Select position" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black border-primary/20">
                                                {jobPositions.map((position) => (
                                                    <SelectItem key={position} value={position}>
                                                        {position}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="experience" className="block text-sm font-semibold text-white mb-2">
                                            Years of Experience
                                        </Label>
                                        <Select
                                            value={formData.experience}
                                            onValueChange={(value) => handleSelectChange("experience", value)}
                                            disabled={isLoading}
                                        >
                                            <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                <SelectValue placeholder="Select experience" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black border-primary/20">
                                                <SelectItem value="0-1">0-1 years</SelectItem>
                                                <SelectItem value="1-3">1-3 years</SelectItem>
                                                <SelectItem value="3-5">3-5 years</SelectItem>
                                                <SelectItem value="5+">5+ years</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="location" className="block text-sm font-semibold text-white mb-2">
                                            Current Location
                                        </Label>
                                        <Input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                            placeholder="City, Country"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="availability" className="block text-sm font-semibold text-white mb-2">
                                            Availability
                                        </Label>
                                        <Select
                                            value={formData.availability}
                                            onValueChange={(value) => handleSelectChange("availability", value)}
                                            disabled={isLoading}
                                        >
                                            <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                <SelectValue placeholder="Select availability" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black border-primary/20">
                                                <SelectItem value="immediate">Immediate</SelectItem>
                                                <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                                                <SelectItem value="1-month">1 month notice</SelectItem>
                                                <SelectItem value="2-months">2+ months</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div>
                                    <Label className="block text-sm font-semibold text-white mb-3">
                                        Technical Skills
                                    </Label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {skillsOptions.map((skill) => (
                                            <div key={skill} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={skill}
                                                    checked={formData.skills.includes(skill)}
                                                    onCheckedChange={(checked) =>
                                                        handleSkillChange(skill, checked as boolean)
                                                    }
                                                    disabled={isLoading}
                                                    className="border-primary/20"
                                                />
                                                <label
                                                    htmlFor={skill}
                                                    className="text-sm text-gray-300 cursor-pointer"
                                                >
                                                    {skill}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Portfolio */}
                                <div>
                                    <Label htmlFor="portfolio" className="block text-sm font-semibold text-white mb-2">
                                        Portfolio/GitHub URL
                                    </Label>
                                    <Input
                                        type="url"
                                        id="portfolio"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                        placeholder="https://github.com/yourusername"
                                    />
                                </div>

                                {/* Cover Letter */}
                                <div>
                                    <Label htmlFor="coverLetter" className="block text-sm font-semibold text-white mb-2">
                                        Cover Letter *
                                    </Label>
                                    <Textarea
                                        id="coverLetter"
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        rows={6}
                                        className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50 resize-none"
                                        placeholder="Tell us why you'd be a great fit for this role and what excites you about MUIAA..."
                                    />
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-start space-x-3">
                                    <Checkbox
                                        id="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onCheckedChange={handleCheckboxChange}
                                        disabled={isLoading}
                                        className="border-primary/20 mt-1"
                                    />
                                    <label htmlFor="agreeToTerms" className="text-sm text-gray-300 cursor-pointer">
                                        I agree to the processing of my personal data for recruitment purposes and
                                        understand that MUIAA will store this information securely. *
                                    </label>
                                </div>

                                <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-black hover:bg-primary/90" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit Application"}
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
                        Questions About Joining?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our HR team at <a href="mailto:careers@muiaa.com" className="text-primary hover:underline">careers@muiaa.com</a>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/about">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                Learn About MUIAA
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
