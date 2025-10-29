"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainFooter from "@/components/mainfooter";
import ScrollToTop from "@/components/scroll-to-top";
import { Card } from "@/components/ui/card";

const solutionsData = [
    {
        id: "chamaconnect",
        name: "Chama Connect",
        subtitle: "For SACCOs, Chamas & Merry-Go-Rounds in Kenya",
        description:
            "A smart, blockchain ledger for informal savings groups—offering automated contributions, payouts, penalties, and group lending insights.",
        blockchain: "Cypherium",
        image: "/Plain/chama-phones.png",
        features: ["Built on Cypherium", "Mobile-ready & SACCO-compliant"],
        cta: "Start Saving Now",
        link: "https://chamaconnect.co.ke/",
    },
    {
        id: "skillchain",
        name: "SkillChain",
        subtitle:
            "Blockchain-Based Learning & Credentials for Kenya's Digital Workforce",
        description:
            "Courses in AI, fintech, Web3, and civic tech. Earn blockchain-certified credentials and connect to employment or freelance opportunities.",
        blockchain: "Cardano",
        image: "/Plain/skillchain-tablet.png",
        features: [
            "Powered by Cardano",
            "Used by counties, NGOs, and informal youth groups",
        ],
        cta: "Start Learning Now",
        link: "https://skillchain.space",
    },
    {
        id: "muiaa-feeds",
        name: "MUIAA Feeds",
        subtitle: "Africa's First Blockchain Cattle Feed Marketplace",
        description:
            "A decentralized marketplace powered by Cardano that facilitates cross-border feed supply between Kenya and Zanzibar—cutting out middlemen, ensuring traceability, and supporting East African livestock trade.",
        blockchain: "Cardano",
        image: "/hero/muiaafeeds.png",
        features: ["Cardano smart contracts", "Traceable procurement logistics"],
        cta: "Explore Marketplace",
        link: "https://feeds.muiaa.com",
    },
    {
        id: "bebapay",
        name: "BebaPay",
        subtitle: "Tokenized Recycling Rewards for a Greener Kenya",
        description:
            "Built during the Nairobi County Hackathon, BebaPay rewards users for recycling with tokens redeemable for goods and savings.",
        blockchain: "Cypherium",
        image: "/projects/bebapay.png",
        features: [
            "Built on Cypherium",
            "Verified recycling records stored on-chain",
        ],
        cta: "Join the Movement",
        link: "https://bebapay.muiaa.com",
    },
    {
        id: "pupswap",
        name: "PupSwap",
        subtitle: "The Meme DEX Built on Cypherium",
        description:
            "A low-gas decentralized exchange supporting MUIAA's community tokens like CypherPup. Fast, secure swaps with minimal gas fees, perfect for launching Africa-first micro-tokens.",
        blockchain: "Cypherium",
        image: "/Plain/pupswap-web.png",
        features: [
            "Powered by Kadena",
            "Cross-chain compatibility with major blockchains",
        ],
        cta: "Start Trading",
        link: "https://pupswap.org",
    },
    {
        id: "hep",
        name: "HEP – Home Equity Partnership",
        subtitle: "Shariah-Compliant Home Ownership Model Built on Blockchain",
        description:
            "Built on Islamic finance principles, HEP offers interest-free, co-ownership of real estate via blockchain-backed Musharakah and Sharikat ul-Milk structures.",
        blockchain: "Cardano",
        image: "/projects/HEP.svg",
        features: ["Built on Kadena", "Shariah-compliant smart contracts"],
        cta: "Own with Dignity",
        link: "https://hep.muiaa.com",
    },
];

interface SolutionCardProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    blockchain: string;
    cta: string;
    link: string;
}

const SolutionCard = ({
    title,
    subtitle,
    description,
    image,
    features,
    blockchain,
    cta,
    link,
}: SolutionCardProps) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
        <Card className="p-8 bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,193,66,0.2)] h-full flex flex-col cursor-pointer group">
            <div className="mb-6 w-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm font-semibold text-primary mb-4">{subtitle}</p>
            <p className="text-gray-300 mb-6 flex-1">{description}</p>

            <div className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span className="text-gray-400">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full">
                    Built on {blockchain}
                </span>
                <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors group-hover:gap-2 flex items-center gap-1">
                    {cta} →
                </button>
            </div>
        </Card>
    </a>
);

export default function SolutionsPage() {
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
                                Our Solutions
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="typo-cta text-gray-300 lg:text-3xl mb-6 md:mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Discover innovative blockchain and AI solutions
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="typo-body mb-10 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Explore our comprehensive portfolio of blockchain and AI solutions that are transforming industries and empowering communities across Africa.
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

            {/* Solutions Grid */}
            <section className="section-padding bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {solutionsData.map((solution, index) => (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <SolutionCard
                                    id={solution.id}
                                    title={solution.name}
                                    subtitle={solution.subtitle}
                                    description={solution.description}
                                    image={solution.image}
                                    features={solution.features}
                                    blockchain={solution.blockchain}
                                    cta={solution.cta}
                                    link={solution.link}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <MainFooter />
            <Footer />
            <ScrollToTop />
        </div>
    );
}
