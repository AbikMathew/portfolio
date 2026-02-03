"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
    {
        name: "IconCal",
        category: "Productivity",
        description: "A calendar application focused on visual organization using custom emojis, featuring two-way calendar syncing.",
        tags: ["Flutter", "Riverpod", "Clean Arch"],
        color: "bg-blue-900/20",
        image: "/iconcal_app_mockup_1770110135965.png", // Corrected filename
        details: {
            highlights: [
                "Implemented two-way sync with Apple Calendar using native EventKit APIs",
                "Integrated Google Calendar syncing via Google Calendar APIs",
                "Added calendar selection controls for selective syncing",
                "Resolved complex recurring event, timezone, and sync consistency issues",
                "Improved scrolling performance and overall UX smoothness",
                "Enhanced custom emoji saving, restoring, and rendering logic"
            ]
        }
    },
    {
        name: "Couplr / Firstlook",
        category: "Social Media",
        description: "A social media platform built specifically for singles with rich engagement features.",
        tags: ["Flutter", "Bloc", "Firebase"],
        color: "bg-purple-900/20",
        image: "/couplr_app_mockup_1770110066313.png",
        details: {
            highlights: [
                "Built and scaled features including feed, chat, stories, proposals, and subscription",
                "Integrated payments, analytics, and identity verification",
                "Collaborated on ML-driven recommendation systems",
                "Achieved 50K+ downloads on Play Store",
                "Played a key role in shaping product architecture and user experience"
            ]
        }
    },
    {
        name: "Internal Tools",
        category: "Productivity Suite",
        description: "A collection of internal tools built for testing, productivity, and automation.",
        tags: ["Flutter", "Windows/Mac", "Tools"],
        color: "bg-emerald-900/20",
        image: "/dark_abstract_background_1770110046912.png", // Using abstract bg as placeholder
        details: {
            highlights: [
                "WRG Bug Tracker – internal bug reporting tool with media uploads",
                "WRG Timer – cross-platform time tracking app using Teamwork APIs",
                "WRG Animation Tool – media generation app using FFMPEG",
                "VPN Buddy – utility app for VPN monitoring with alerts and notifications"
            ]
        }
    },
];

export default function Projects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="h-[300vh] relative bg-transparent z-10">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 px-16">
                    <div className="flex flex-col justify-center min-w-[30vw] md:min-w-[20vw] pr-12 text-left">
                        <h2 className="text-6xl md:text-8xl font-serif text-white mb-6">
                            Selected <br /> Works
                        </h2>
                        <p className="text-gray-400 max-w-xs">
                            A curated selection of mobile and web applications I have built and led. <br />
                            <span className="text-blue-400 text-sm mt-2 block">Tip: Click cards for details.</span>
                        </p>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-[60vh] w-[85vw] md:w-[45vw] shrink-0 perspective-1000 group cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full preserve-3d transition-all duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front */}
                <div className={`absolute inset-0 backface-hidden ${project.color} border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col justify-between backdrop-blur-sm group-hover:border-white/20 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        {/* Fallback pattern or image if provided */}
                        <Image src={project.image} alt={project.name} fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

                    <div className="relative z-10 mt-auto">
                        <span className="text-sm font-mono text-gray-400 mb-4 block">{project.category}</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">{project.name}</h3>
                        <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm font-mono text-gray-400 bg-black/40">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="absolute top-8 right-8 z-10">
                        <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-xs animate-pulse">
                            +
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div
                    className={`absolute inset-0 backface-hidden ${project.color} border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col backdrop-blur-md rotate-y-180 bg-black/90`}
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">Key Highlights</h3>
                    <ul className="space-y-4 overflow-y-auto pr-4 scrollbar-hide">
                        {project.details.highlights.map((item: string, i: number) => (
                            <li key={i} className="text-gray-300 text-base md:text-lg flex items-start gap-3">
                                <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-6 text-center">
                        <span className="text-sm text-gray-500 font-mono">Tap to flip back</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
