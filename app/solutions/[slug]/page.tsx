"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainFooter from "@/components/mainfooter";
import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Zap, Shield, Rocket, Target, CheckCircle, Globe, TrendingUp } from "lucide-react";

// Solutions data matching the solutions page
const solutionsData: Record<string, {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    blockchain: string;
    image: string;
    features: string[];
    cta: string;
    link: string;
    category?: string;
}> = {
    "chamaconnect": {
        id: "chamaconnect",
        name: "Chama Connect",
        subtitle: "For SACCOs, Chamas & Merry-Go-Rounds in Kenya",
        description:
            "A smart, blockchain ledger for informal savings groups—offering automated contributions, payouts, penalties, and group lending insights.",
        blockchain: "Cypherium",
        image: "/Plain/chama-phones.png",
        features: [
            "Automated contributions and payouts",
            "Transparent member dashboard",
            "Automated penalty management",
            "Group lending insights",
            "SACCO-compliant operations",
            "Mobile-first experience"
        ],
        cta: "Start Saving Now",
        link: "https://chamaconnect.co.ke/",
        category: "Finance"
    },
    "skillchain": {
        id: "skillchain",
        name: "SkillChain",
        subtitle: "Blockchain-Based Learning & Credentials for Kenya's Digital Workforce",
        description:
            "Courses in AI, fintech, Web3, and civic tech. Earn blockchain-certified credentials and connect to employment or freelance opportunities.",
        blockchain: "Cardano",
        image: "/Plain/skillchain-tablet.png",
        features: [
            "Blockchain-certified credentials",
            "AI, fintech, and Web3 courses",
            "Employment and freelance connections",
            "Trusted by counties and NGOs",
            "Youth-focused training programs",
            "Immutable skill verification"
        ],
        cta: "Start Learning Now",
        link: "https://skillchain.space",
        category: "Education"
    },
    "muiaa-feeds": {
        id: "muiaa-feeds",
        name: "MUIAA Feeds",
        subtitle: "Africa's First Blockchain Cattle Feed Marketplace",
        description:
            "A decentralized marketplace powered by Cardano that facilitates cross-border feed supply between Kenya and Zanzibar—cutting out middlemen, ensuring traceability, and supporting East African livestock trade.",
        blockchain: "Cardano",
        image: "/hero/muiaafeeds.png",
        features: [
            "Decentralized marketplace",
            "Cross-border supply chain",
            "Complete traceability",
            "Cardano smart contracts",
            "Middleman elimination",
            "East African trade support"
        ],
        cta: "Explore Marketplace",
        link: "https://feeds.muiaa.com",
        category: "Supply Chain"
    },
    "bebapay": {
        id: "bebapay",
        name: "BebaPay",
        subtitle: "Tokenized Recycling Rewards for a Greener Kenya",
        description:
            "Built during the Nairobi County Hackathon, BebaPay rewards users for recycling with tokens redeemable for goods and savings.",
        blockchain: "Cypherium",
        image: "/projects/bebapay.png",
        features: [
            "Tokenized recycling rewards",
            "On-chain verification",
            "Redeemable for goods",
            "Savings integration",
            "Environmental impact tracking",
            "Community-driven initiative"
        ],
        cta: "Join the Movement",
        link: "https://bebapay.muiaa.com",
        category: "Sustainability"
    },
    "pupswap": {
        id: "pupswap",
        name: "PupSwap",
        subtitle: "The Meme DEX Built on Cypherium",
        description:
            "A low-gas decentralized exchange supporting MUIAA's community tokens like CypherPup. Fast, secure swaps with minimal gas fees, perfect for launching Africa-first micro-tokens.",
        blockchain: "Cypherium",
        image: "/Plain/pupswap-web.png",
        features: [
            "Low-gas DEX",
            "Community token support",
            "Fast secure swaps",
            "Cross-chain compatibility",
            "Africa-first micro-tokens",
            "Minimal transaction fees"
        ],
        cta: "Start Trading",
        link: "https://pupswap.org",
        category: "DeFi"
    },
    "hep": {
        id: "hep",
        name: "HEP – Home Equity Partnership",
        subtitle: "Shariah-Compliant Home Ownership Model Built on Blockchain",
        description:
            "Built on Islamic finance principles, HEP offers interest-free, co-ownership of real estate via blockchain-backed Musharakah and Sharikat ul-Milk structures.",
        blockchain: "Cardano",
        image: "/projects/HEP.svg",
        features: [
            "Shariah-compliant finance",
            "Interest-free ownership",
            "Blockchain transparency",
            "Co-ownership structures",
            "Islamic finance principles",
            "Real estate accessibility"
        ],
        cta: "Own with Dignity",
        link: "https://hep.muiaa.com",
        category: "Real Estate"
    },
};

export default function SolutionDetailPage() {
    const params = useParams<{ slug: string }>();
    const slug = (params?.slug || "").toString();

    const solution = useMemo(() => solutionsData[slug], [slug]);

    if (!solution) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Solution Not Found</h1>
                    <Link href="/solutions">
                        <Button>Back to Solutions</Button>
                    </Link>
                </div>
            </div>
        );
    }

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

                <div className="container mx-auto px-4 relative z-10 w-full">
                    {/* Breadcrumb */}
                    <div className="max-w-6xl mx-auto mb-8">
                        <Link href="/solutions" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Solutions
                        </Link>
                    </div>

                    {/* Side-by-side Layout */}
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Image Section */}
                        <motion.div
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl transform scale-110"></div>
                                <motion.img
                                    src={solution.image}
                                    alt={solution.name}
                                    className="relative w-full h-auto object-contain rounded-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    whileHover={{ scale: 1.02 }}
                                />
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <div className="order-1 lg:order-2">
                            {/* Accent Line */}
                            <motion.div
                                className="flex items-center gap-3 mb-6 md:mb-8"
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

                            {/* Main Heading */}
                            <motion.h1
                                className="typo-h1 xl:text-6xl mb-4 md:mb-6 text-left"
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
                                    {solution.name}
                                </motion.span>
                                <motion.span
                                    className="block bg-gradient-to-r text-sm from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    {solution.subtitle}
                                </motion.span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                className="typo-cta text-gray-300 lg:text-xl mb-4 md:mb-6 text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {solution.category || "Solution"} • Built on {solution.blockchain}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                className="typo-body mb-6 md:mb-8 text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                {solution.description}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Link href={solution.link} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90 w-full sm:w-auto">
                                        {solution.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                                <Link href="/solutions">
                                    <Button variant="outline" size="lg" className="gap-2 border-primary/30 text-primary hover:bg-primary/10 w-full sm:w-auto text-black hover:text-white">
                                        View All Solutions
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Stats Section */}
                            <motion.div
                                className="grid grid-cols-3 gap-4 md:gap-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                {[
                                    { number: solution.features.length + "+", label: "Features" },
                                    { number: solution.blockchain, label: "Platform" },
                                    { number: "100%", label: "Secure" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-left"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-400">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
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

            {/* Key Features Section */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 mb-3">Key Features</h2>
                        <p className="typo-subtle">What makes {solution.name} powerful</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 max-w-6xl mx-auto">
                        {solution.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-black border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg mb-2">{feature}</h4>
                                            <p className="text-gray-300 text-sm">Benefit delivered through blockchain and great UX.</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Impact Section */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 md:mb-20">
                        {/* Technology Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-black border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Built on {solution.blockchain}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "High performance infrastructure",
                                        "Audited security protocols",
                                        "Global community support",
                                        "Low transaction fees",
                                        "Scalable architecture",
                                        "Developer-friendly APIs"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>

                        {/* Impact Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-black border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Impact & Value</h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { icon: Rocket, title: "Faster Implementation", desc: "Launch quickly with reliable blockchain primitives." },
                                        { icon: Shield, title: "Trust & Transparency", desc: "Transparent operations with full auditability." },
                                        { icon: TrendingUp, title: "Scalable Growth", desc: "Built to grow with your community needs." },
                                        { icon: Globe, title: "Global Reach", desc: "Accessible across borders and regions." },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">{item.title}</p>
                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Benefits Section */}
            <section className="relative section-padding bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="section-header-spacing text-center md:mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="typo-h2 mb-2">Why {solution.name}</h2>
                        <p className="typo-subtle">Key advantages and benefits</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Zap,
                                title: "Innovation",
                                description: "Cutting-edge technology designed for real-world African challenges and use cases.",
                            },
                            {
                                icon: Shield,
                                title: "Security",
                                description: "Enterprise-grade security with transparent, audited smart contracts and protocols.",
                            },
                            {
                                icon: Rocket,
                                title: "Scalability",
                                description: "Local-first solutions designed to scale across borders and communities.",
                            },
                            {
                                icon: Target,
                                title: "Impact",
                                description: "Co-created with users for maximum community impact and adoption.",
                            },
                        ].map((benefit, idx) => {
                            const Icon = benefit.icon;
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
                                                <h4 className="font-semibold text-white text-lg mb-2">{benefit.title}</h4>
                                                <p className="text-gray-300">{benefit.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
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
                    className="max-w-3xl mx-auto text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join us in transforming industries and empowering Africa through blockchain innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={solution.link} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90">
                                {solution.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 text-center text-black w-full sm:w-auto hover:text-white">
                                Explore Other Solutions
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
