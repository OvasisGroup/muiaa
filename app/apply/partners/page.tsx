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
import { ArrowRight, Handshake, Rocket, TrendingUp, Users, Globe, Heart, Award } from "lucide-react";
import { emailService } from "@/lib/emailService";

export default function ApplyPartnersPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        organizationName: "",
        contactName: "",
        email: "",
        phone: "",
        website: "",
        partnershipType: "",
        sector: "",
        location: "",
        scale: "",
        partnershipGoals: [] as string[],
        description: "",
        agreeToTerms: false,
    });

    const partnershipTypes = [
        "Technology Integration",
        "Strategic Alliance",
        "Community Program",
        "Investment/Funding",
        "Research & Development",
        "Market Expansion",
        "Other",
    ];

    const partnershipGoalsOptions = [
        "Financial Inclusion",
        "Digital Literacy",
        "Blockchain Adoption",
        "Community Development",
        "Environmental Sustainability",
        "Youth Empowerment",
        "Economic Growth",
        "Technology Transfer",
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

    const handleGoalChange = (goal: string, checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            partnershipGoals: checked
                ? [...prev.partnershipGoals, goal]
                : prev.partnershipGoals.filter((g) => g !== goal),
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
                !formData.organizationName ||
                !formData.contactName ||
                !formData.email ||
                !formData.partnershipType ||
                !formData.description ||
                !formData.agreeToTerms
            ) {
                alert("Please fill in all required fields and agree to the terms.");
                setIsLoading(false);
                return;
            }

            // Send email using email service
            const response = await emailService.sendPartnershipApplicationEmail({
                organizationName: formData.organizationName,
                contactName: formData.contactName,
                email: formData.email,
                phone: formData.phone,
                website: formData.website,
                partnershipType: formData.partnershipType,
                sector: formData.sector,
                location: formData.location,
                scale: formData.scale,
                partnershipGoals: formData.partnershipGoals,
                description: formData.description,
            });

            if (response.success) {
                alert("Thank you for your partnership inquiry! We'll review it and get back to you soon.");
                setFormData({
                    organizationName: "",
                    contactName: "",
                    email: "",
                    phone: "",
                    website: "",
                    partnershipType: "",
                    sector: "",
                    location: "",
                    scale: "",
                    partnershipGoals: [],
                    description: "",
                    agreeToTerms: false,
                });
            } else {
                alert(`Error: ${response.error || "Failed to submit inquiry"}`);
            }
        } catch (error) {
            console.error("Partnership inquiry error:", error);
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
                                Partner with MUIAA
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Transform Together
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Creating transformative blockchain solutions
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Collaborate to create transformative blockchain solutions for Africa&apos;s communities. Join forces with us to drive innovation and sustainable development across the continent.
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

            {/* Partnership Benefits Section */}
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
                            Partnership Benefits
                        </h2>
                        <p className="typo-subtle">What you gain by partnering with MUIAA</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Rocket, title: "Innovation Access", description: "Leverage our blockchain and AI expertise to enhance your initiatives", delay: 0.1 },
                            { icon: Globe, title: "Continental Network", description: "Connect with our ecosystem across multiple African countries", delay: 0.2 },
                            { icon: TrendingUp, title: "Mutual Growth", description: "Co-create solutions that benefit both organizations and communities", delay: 0.3 },
                            { icon: Heart, title: "Social Impact", description: "Amplify your social impact through scalable technology solutions", delay: 0.4 },
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

            {/* Partnership Models Section */}
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
                            Partnership Models
                        </h2>
                        <p className="typo-subtle">Multiple ways to collaborate based on your goals</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "Technology Partners", description: "Integrate our blockchain solutions into your platforms or co-develop new technologies", points: ["API access", "Joint development", "Technology licensing"], delay: 0.1 },
                            { title: "Strategic Partners", description: "Form alliances to expand market reach, share resources, and drive joint initiatives", points: ["Market expansion", "Resource sharing", "Co-branding"], delay: 0.2 },
                            { title: "Community Partners", description: "Collaborate on grassroots programs, training initiatives, and community engagement", points: ["Training programs", "Community events", "Impact measurement"], delay: 0.3 },
                        ].map((model, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: model.delay }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                                    <h3 className="text-2xl font-bold text-primary mb-3">{model.title}</h3>
                                    <p className="text-gray-300 mb-6 flex-1">{model.description}</p>
                                    <ul className="space-y-2">
                                        {model.points.map((point, idx) => (
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

            {/* Partnership Application Form Section */}
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
                            <h2 className="typo-h3 text-white mb-2">Partnership Inquiry Form</h2>
                            <p className="typo-subtle mb-8">Tell us about your organization and partnership interests</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Organization Information */}
                                <div>
                                    <Label htmlFor="organizationName" className="block text-sm font-semibold text-white mb-2">
                                        Organization Name *
                                    </Label>
                                    <Input
                                        type="text"
                                        id="organizationName"
                                        name="organizationName"
                                        value={formData.organizationName}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                        placeholder="Your organization name"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="contactName" className="block text-sm font-semibold text-white mb-2">
                                            Contact Person *
                                        </Label>
                                        <Input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
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

                                    <div>
                                        <Label htmlFor="website" className="block text-sm font-semibold text-white mb-2">
                                            Website
                                        </Label>
                                        <Input
                                            type="url"
                                            id="website"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                            className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50"
                                            placeholder="https://yourorganization.com"
                                        />
                                    </div>
                                </div>

                                {/* Partnership Details */}
                                <div>
                                    <Label htmlFor="partnershipType" className="block text-sm font-semibold text-white mb-2">
                                        Partnership Type *
                                    </Label>
                                    <Select
                                        value={formData.partnershipType}
                                        onValueChange={(value) => handleSelectChange("partnershipType", value)}
                                        disabled={isLoading}
                                    >
                                        <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                            <SelectValue placeholder="Select partnership type" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-black border-primary/20">
                                            {partnershipTypes.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="sector" className="block text-sm font-semibold text-white mb-2">
                                            Sector/Industry
                                        </Label>
                                        <Select
                                            value={formData.sector}
                                            onValueChange={(value) => handleSelectChange("sector", value)}
                                            disabled={isLoading}
                                        >
                                            <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                                <SelectValue placeholder="Select sector" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black border-primary/20">
                                                <SelectItem value="technology">Technology</SelectItem>
                                                <SelectItem value="finance">Finance/Banking</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="government">Government</SelectItem>
                                                <SelectItem value="ngo">NGO/Non-profit</SelectItem>
                                                <SelectItem value="agriculture">Agriculture</SelectItem>
                                                <SelectItem value="health">Healthcare</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="location" className="block text-sm font-semibold text-white mb-2">
                                            Primary Location
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
                                </div>

                                <div>
                                    <Label htmlFor="scale" className="block text-sm font-semibold text-white mb-2">
                                        Organization Scale
                                    </Label>
                                    <Select
                                        value={formData.scale}
                                        onValueChange={(value) => handleSelectChange("scale", value)}
                                        disabled={isLoading}
                                    >
                                        <SelectTrigger className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50">
                                            <SelectValue placeholder="Select organization scale" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-black border-primary/20">
                                            <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                                            <SelectItem value="small">Small (11-50 employees)</SelectItem>
                                            <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                                            <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                                            <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Partnership Goals */}
                                <div>
                                    <Label className="block text-sm font-semibold text-white mb-3">
                                        Partnership Goals
                                    </Label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {partnershipGoalsOptions.map((goal) => (
                                            <div key={goal} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={goal}
                                                    checked={formData.partnershipGoals.includes(goal)}
                                                    onCheckedChange={(checked) =>
                                                        handleGoalChange(goal, checked as boolean)
                                                    }
                                                    disabled={isLoading}
                                                    className="border-primary/20"
                                                />
                                                <label
                                                    htmlFor={goal}
                                                    className="text-sm text-gray-300 cursor-pointer"
                                                >
                                                    {goal}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <Label htmlFor="description" className="block text-sm font-semibold text-white mb-2">
                                        Partnership Description *
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        rows={6}
                                        className="w-full bg-black/50 border-primary/20 text-white focus:border-primary/50 resize-none"
                                        placeholder="Tell us about your organization, what you hope to achieve through this partnership, and any specific initiatives or projects you'd like to collaborate on..."
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
                                        I agree to share this information with MUIAA for partnership evaluation and
                                        understand that this does not constitute a binding agreement. *
                                    </label>
                                </div>

                                <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-black hover:bg-primary/90" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit Partnership Inquiry"}
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
                        Let&apos;s Build Together
                    </h2>
                    <p className="typo-body text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our partnerships team at <a href="mailto:partners@muiaa.com" className="text-primary hover:underline">partners@muiaa.com</a>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/partners">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                View Existing Partners
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                                Explore Our Solutions
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
