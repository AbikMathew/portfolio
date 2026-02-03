"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const experiences = [
    {
        company: "Ogma Conceptions",
        role: "Senior Frontend Developer (Flutter)",
        period: "Jul 2025 - Present",
        type: "Remote",
        description: "Leading Flutter-based mobile and web application development for US-based clients. Driving architectural decisions and expanding into native iOS.",
    },
    {
        company: "Mcabee",
        role: "SDE II / Team Lead",
        period: "Nov 2023 - Jun 2025",
        type: "Remote",
        description: "Led mobile development for a product-based startup. Owned end-to-end delivery of a social media app for singles. Mentored juniors and shaped product direction.",
    },
    {
        company: "Mcabee",
        role: "SDE I",
        period: "Jul 2023 - Nov 2023",
        type: "Kochi (Hybrid)",
        description: "Built core application features from scratch. Collaborated with cross-functional teams including backend, ML, and design.",
    },
    {
        company: "White Rabbit",
        role: "Trainee Software Engineer",
        period: "Aug 2022 - Jun 2023",
        type: "Infopark, Kochi",
        description: "Worked on multiple internal and client-facing Flutter projects. Gained strong fundamentals in Dart, Flutter SDK, and app architecture.",
    },
];

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">

            {/* Profile Intro Section */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-48 h-48 md:w-64 md:h-64 relative shrink-0"
                >
                    <div className="absolute inset-0 rounded-full border border-white/10 overflow-hidden">
                        <Image
                            src="/profile_placeholder_stylized_1770110084884.png"
                            alt="Abik Mathew Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-pulse" />
                </motion.div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-serif text-white mb-4">About Me</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                        I am a passionate Software Developer with a journey that spans across structured service-based companies and fast-paced startups.
                        Currently leading mobile engineering efforts and expanding into native iOS development.
                        I love turning complex problems into smooth, buttery user experiences.
                    </p>
                </div>
            </div>

            <div className="absolute left-8 md:left-1/2 top-[400px] bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif text-center mb-24 relative z-10"
            >
                The Journey
            </motion.h2>

            <div className="space-y-24 md:space-y-48">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                ))}
            </div>
        </section>
    );
}

function ExperienceCard({ exp, index }: { exp: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-24 relative ${isEven ? 'md:text-right' : 'md:flex-row-reverse'}`}
        >
            <div className="flex-1 md:w-1/2">
                <span className="text-gray-500 text-sm tracking-widest uppercase mb-2 block font-mono">
                    {exp.period} | {exp.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white">{exp.role}</h3>
                <h4 className="text-xl text-blue-400 mb-4 font-mono">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 inline-block">
                    {exp.description}
                </p>
            </div>

            {/* Spacer for the timeline center */}
            <div className="hidden md:block w-0 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full blur-[2px]" />
            </div>

            <div className="flex-1 md:w-1/2" />
        </motion.div>
    );
}
