"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const team = [
    {
        name: "OSBORNE NJOROGE",
        role: "CEO & Co-Founder",
        department: "Executive",
        bio: "Visionary leader driving blockchain innovation across African markets. 10+ years in fintech and strategic partnerships.",
        image: "/team/1.png",
        social: {
            linkedin: "https://linkedin.com/in/osborne-njoroge",
            twitter: "https://twitter.com/osborne_muiaa",
            github: "https://github.com/osborne-muiaa",
            email: "osborne@muiaa.com",
        },
    },
    {
        name: "JOHN MUTHEE",
        role: "General Manager",
        department: "Executive",
        image: "/team/4.png",
        bio: "Strategic operations leader with proven expertise in scaling fintech platforms across East Africa.",
        social: {
            linkedin: "https://linkedin.com/in/john-muthee",
            twitter: "https://twitter.com/john_muiaa",
            github: "https://github.com/john-muiaa",
            email: "john@muiaa.com",
        },
    },
    {
        name: "JOSEPH BIWOTT",
        role: "Chief Technology Officer",
        department: "Executive",
        bio: "Technology visionary leading our blockchain infrastructure and AI innovation initiatives.",
        image: "/team/2.png",
        social: {
            linkedin: "https://linkedin.com/in/joseph-biwott",
            twitter: "https://twitter.com/joseph_muiaa",
            github: "https://github.com/joseph-muiaa",
            email: "joseph@muiaa.com",
        },
    },
    {
        name: "CHEBETH ROTICH",
        role: "System Analyst",
        department: "Product",
        bio: "Product strategist passionate about creating inclusive fintech solutions that serve underserved communities.",
        image: "/team/3.png",
        social: {
            linkedin: "https://linkedin.com/in/chebeth-rotich",
            twitter: "https://twitter.com/chebeth_muiaa",
            github: "https://github.com/chebeth-muiaa",
            email: "chebeth@muiaa.com",
        },
    },
    {
        name: "ANTONIO OMAMBIA",
        role: "Product Manager",
        department: "Engineering",
        bio: "Blockchain engineer specializing in DeFi protocols, smart contract security, and cross-chain interoperability.",
        image: "/team/6.png",
        social: {
            linkedin: "https://linkedin.com/in/antonio-omambia",
            twitter: "https://twitter.com/antonio_muiaa",
            github: "https://github.com/antonio-muiaa",
            email: "antonio@muiaa.com",
        },
    },
    {
        name: "EMMANUEL KOKI",
        role: "Outreach and Marketing",
        department: "Research",
        bio: "Community engagement specialist focused on blockchain awareness and education initiatives.",
        image: "/team/8.png",
        social: {
            linkedin: "https://linkedin.com/in/emmanuel-koki",
            twitter: "https://twitter.com/emmanuel_muiaa",
            github: "https://github.com/emmanuel-muiaa",
            email: "emmanuel@muiaa.com",
        },
    },
    {
        name: "PAVIN KIPTOO",
        role: "Blockchain Dev & DeFi Engineer",
        department: "Engineering",
        bio: "DeFi specialist building decentralized finance protocols and trading systems.",
        image: "/team/9.png",
        social: {
            linkedin: "https://linkedin.com/in/pavin-kiptoo",
            twitter: "https://twitter.com/pavin_muiaa",
            github: "https://github.com/pavin-muiaa",
            email: "pavin@muiaa.com",
        },
    },
    {
        name: "OMAMBIA DAUGLOUS",
        role: "DevOps & Software Engineer",
        department: "Engineering",
        bio: "Infrastructure and DevOps engineer ensuring scalability, security, and reliability of our platforms.",
        image: "/team/7.png",
        social: {
            linkedin: "https://linkedin.com/in/dauglous-omambia",
            twitter: "https://twitter.com/dauglous_muiaa",
            github: "https://github.com/dauglous-muiaa",
            email: "dauglous@muiaa.com",
        },
    },
    {
        name: "VENESSA NJOROGE",
        role: "HR & Talent Recruiter",
        department: "Executive",
        bio: "Talent acquisition leader building and nurturing our diverse team of innovators.",
        image: "/team/5.png",
        social: {
            linkedin: "https://linkedin.com/in/venessa-njoroge",
            twitter: "https://twitter.com/venessa_muiaa",
            github: "https://github.com/venessa-muiaa",
            email: "venessa@muiaa.com",
        },
    },
];

const departmentColors: { [key: string]: string } = {
    Executive: "from-primary to-primary/70",
    Product: "from-primary/80 to-primary/50",
    Engineering: "from-primary to-primary/60",
    Research: "from-primary/90 to-primary/60",
    Design: "from-primary/75 to-primary/55",
    "Quality Assurance": "from-primary/85 to-primary/65",
    Infrastructure: "from-primary/80 to-primary/50",
};

interface TeamMember {
    name: string;
    role: string;
    department: string;
    bio?: string;
    image: string;
    social: {
        linkedin: string;
        twitter: string;
        github: string;
        email: string;
    };
}

function TeamCard({ member, departmentColor }: { member: TeamMember; departmentColor: string }) {
    return (
        <Card className="p-6 md:p-8 bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(243,193,66,0.2)] transition-all duration-300 group h-full flex flex-col">
            {/* Avatar */}
            <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                        }}
                    />
                </div>
                {/* Department indicator */}
                <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${departmentColor} flex items-center justify-center shadow-lg border-2 border-black`}>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Content */}
            <div className="text-center flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h4>

                <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-2 mx-auto">
                    {member.role}
                </div>

                <div className={`inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r ${departmentColor} bg-opacity-10 px-2 py-1 text-xs font-semibold text-white mb-3 mx-auto`}>
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${departmentColor}`}></span>
                    {member.department}
                </div>

                <p className="text-sm text-gray-300 mb-4 flex-1">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="hover:bg-primary/20 hover:text-primary h-8 w-8 p-0 text-gray-400"
                        asChild
                    >
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="hover:bg-primary/20 hover:text-primary h-8 w-8 p-0 text-gray-400"
                        asChild
                    >
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="hover:bg-primary/20 hover:text-primary h-8 w-8 p-0 text-gray-400"
                        asChild
                    >
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="hover:bg-primary/20 hover:text-primary h-8 w-8 p-0 text-gray-400"
                        asChild
                    >
                        <a href={`mailto:${member.social.email}`}>
                            <Mail className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export const Team = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const autoScrollPausedRef = useRef(false);
    const autoScrollDirectionRef = useRef<1 | -1>(1);
    const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const autoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScrollButtons);
            checkScrollButtons();
            return () => scrollContainer.removeEventListener("scroll", checkScrollButtons);
        }
    }, []);

    // Gentle auto-scroll with initial delay; pauses on hover/interactions
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const startAutoScroll = () => {
            const interval = setInterval(() => {
                if (autoScrollPausedRef.current || !scrollRef.current) return;
                const el = scrollRef.current;
                const max = el.scrollWidth - el.clientWidth;

                // Reverse at edges
                if (el.scrollLeft >= max - 1) {
                    autoScrollDirectionRef.current = -1;
                } else if (el.scrollLeft <= 0) {
                    autoScrollDirectionRef.current = 1;
                }

                el.scrollLeft += autoScrollDirectionRef.current * 1; // ~60px/sec
            }, 16);

            return interval;
        };

        // Start after 4s to allow reading
        const delay = setTimeout(() => {
            autoIntervalRef.current = startAutoScroll();
        }, 4000);

        return () => {
            clearTimeout(delay);
            if (autoIntervalRef.current) {
                clearInterval(autoIntervalRef.current);
                autoIntervalRef.current = null;
            }
        };
    }, []);

    const pauseAutoScrollTemporarily = (ms = 4000) => {
        autoScrollPausedRef.current = true;
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            autoScrollPausedRef.current = false;
        }, ms);
    };

    return (
        <section className="relative py-12 md:py-20 bg-black border-t border-primary/10">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Meet Our Team
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Diverse innovators and visionaries building the future of blockchain for Africa
                    </p>
                </motion.div>

                {/* Mobile/Tablet Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:hidden">
                    {team.map((member, index) => {
                        const departmentColor = departmentColors[member.department] || "from-primary to-primary/70";
                        return (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TeamCard member={member} departmentColor={departmentColor} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Desktop Carousel */}
                <div className="hidden lg:block relative">
                    <Button
                        size="icon"
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-black shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => { scrollLeft(); pauseAutoScrollTemporarily(); }}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        size="icon"
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-black shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => { scrollRight(); pauseAutoScrollTemporarily(); }}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
                        onMouseEnter={() => { autoScrollPausedRef.current = true; }}
                        onMouseLeave={() => { autoScrollPausedRef.current = false; }}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {team.map((member) => {
                            const departmentColor = departmentColors[member.department] || "from-primary to-primary/70";
                            return (
                                <div key={member.name} className="flex-shrink-0 w-80">
                                    <TeamCard member={member} departmentColor={departmentColor} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

