"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainFooter from "@/components/mainfooter";
import ScrollToTop from "@/components/scroll-to-top";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Rocket, Globe, TrendingUp, Handshake, Lightbulb, Award } from "lucide-react";

const partnersData = [
    {
        id: "computer-aid",
        name: "Computer Aid International",
        description: "Empowering communities through digital inclusion and technology access across Africa.",
        logo: "/partners/computeraid.svg",
        logoFallback: "/partners/computeraid.png",
        category: "Digital Inclusion",
        link: "https://www.computeraid.org"
    },
    {
        id: "nairobi-county",
        name: "Nairobi County Government",
        description: "Fostering innovation and economic development through strategic technology partnerships.",
        logo: "/partners/nairobicounty.svg",
        logoFallback: "/partners/nairobicounty@4x.png",
        category: "Government",
        link: "https://www.nairobi.go.ke"
    },
    {
        id: "ngeni",
        name: "Ngeni",
        description: "Supporting entrepreneurship and innovation ecosystems across East Africa.",
        logo: "/partners/Ngeni.svg",
        logoFallback: "/partners/Ngeni.svg",
        category: "Entrepreneurship",
        link: "https://ngeni.io"
    },
    {
        id: "women-of-destiny",
        name: "Women of Destiny",
        description: "Empowering women through financial inclusion, skills training, and economic opportunities.",
        logo: "/partners/womenof.svg",
        logoFallback: "/partners/women of destiny@4x.png",
        category: "Women Empowerment",
        link: "https://www.womenof.org"
    }
];

const PartnerCard = ({ partner }: { partner: typeof partnersData[0] }) => (
    <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,193,66,0.2)] group h-full flex flex-col">
        <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {/* Logo Container */}
            <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-black to-black/50 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300">
                <img
                    src={partner.logo}
                    alt={partner.name}
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = partner.logoFallback;
                    }}
                    className="w-auto h-auto max-h-32 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-6 border-t border-primary/10">
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/20 rounded-full mb-2">
                        {partner.category}
                    </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {partner.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    {partner.description}
                </p>
            </div>
        </a>
    </Card>
);

const BenefitCard = ({
    icon,
    title,
    description
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => (
    <Card className="p-6 text-center bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,193,66,0.2)] group">
        <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </Card>
);

const PartnershipTypeCard = ({
    title,
    description,
    benefits
}: {
    title: string;
    description: string;
    benefits: string[];
}) => (
    <Card className="p-8 bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,193,66,0.2)]">
        <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                    <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                </li>
            ))}
        </ul>
    </Card>
);

export default function PartnersPage() {
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
                                Our Partners
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Building Together
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Empowering Africa through collaboration
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Together with visionary organizations, we&apos;re empowering Africa through innovation, technology, and sustainable development across the continent.
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

            {/* Partners Grid */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
                        {partnersData.map((partner, index) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <PartnerCard partner={partner} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center section-header-spacing space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Accent Line */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/60 max-w-xs" />
                            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/60 max-w-xs" />
                        </div>

                        <h2 className="typo-h2 mb-4 text-white">
                            Why Partner With MUIAA
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: <Rocket className="w-10 h-10 text-primary" />, title: "Innovation Hub", description: "Access cutting-edge blockchain and AI technologies to amplify your impact and reach.", delay: 0.1 },
                            { icon: <Globe className="w-10 h-10 text-primary" />, title: "Continental Network", description: "Connect with a growing ecosystem of social enterprises and tech innovators across Africa.", delay: 0.2 },
                            { icon: <TrendingUp className="w-10 h-10 text-primary" />, title: "Mutual Growth", description: "Collaborate on projects that drive financial inclusion, education, and sustainable development.", delay: 0.3 },
                            { icon: <Handshake className="w-10 h-10 text-primary" />, title: "Shared Values", description: "Work with organizations committed to ethical innovation and community empowerment.", delay: 0.4 },
                            { icon: <Lightbulb className="w-10 h-10 text-primary" />, title: "Resource Sharing", description: "Leverage combined expertise, data, and technical capabilities for greater impact.", delay: 0.5 },
                            { icon: <Award className="w-10 h-10 text-primary" />, title: "UN SDG Alignment", description: "Contribute to UN Sustainable Development Goals through coordinated initiatives.", delay: 0.6 },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: benefit.delay }}
                                viewport={{ once: true }}
                            >
                                <BenefitCard
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Types */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center section-header-spacing space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Accent Line */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/60 max-w-xs" />
                            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/60 max-w-xs" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Partnership Opportunities
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Technology Partnerships", description: "Collaborate on blockchain integration, AI development, and technical infrastructure projects.", benefits: ["Joint development", "Technology transfer", "Co-branded solutions"], delay: 0.1 },
                            { title: "Strategic Alliances", description: "Form alliances to expand reach, share resources, and amplify social impact initiatives.", benefits: ["Market expansion", "Resource sharing", "Joint ventures"], delay: 0.2 },
                            { title: "Community Programs", description: "Partner on grassroots initiatives including hackathons, training programs, and community engagement.", benefits: ["Skills training", "Community events", "Volunteer opportunities"], delay: 0.3 },
                            { title: "Investment & Funding", description: "Explore investment opportunities, grants, and collaborative funding for sustainable growth.", benefits: ["Funding access", "Grant programs", "Impact investment"], delay: 0.4 },
                        ].map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: type.delay }}
                                viewport={{ once: true }}
                            >
                                <PartnershipTypeCard
                                    title={type.title}
                                    description={type.description}
                                    benefits={type.benefits}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative section-padding-medium bg-black border-t border-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mx-auto text-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                Ready to Partner With Us?
                            </h2>
                            <p className="text-xl text-gray-300">
                                Join us in our mission to empower Africa through blockchain, AI, and ethical innovation. Let&apos;s create transformative solutions together.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="gap-2 w-full sm:w-auto bg-primary text-black hover:bg-primary/90">
                                    Get In Touch <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="/solutions">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10 text-black hover:text-white">
                                    View Our Solutions
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <MainFooter />
            <Footer />
            <ScrollToTop />
        </div>
    );
}
