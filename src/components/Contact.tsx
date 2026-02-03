"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
        <footer className="py-32 px-4 md:px-8 bg-[#050505] min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 uppercase tracking-widest text-sm mb-8"
                >
                    Get in Touch
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif leading-none mb-16"
                >
                    Let's build <br /> something <span className="text-blue-500 italic">amazing</span>.
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start border-t border-white/10 pt-12">
                    <div>
                        <span className="block text-gray-500 text-sm mb-2">Email</span>
                        <a href="mailto:abhikmgeorge100@gmail.com" className="text-2xl md:text-3xl hover:text-blue-400 transition-colors">
                            abkmg100@gmail.com
                        </a>
                    </div>

                    <div>
                        <span className="block text-gray-500 text-sm mb-2">Phone</span>
                        <a href="tel:+918111905637" className="text-2xl md:text-3xl hover:text-blue-400 transition-colors">
                            +91 8111905637
                        </a>
                    </div>

                    <div className="flex gap-6 mt-4 md:mt-0 ml-auto">
                        <a href="https://github.com/AbikMathew" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/abik-mathew/" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.1),transparent_50%)]" />
        </footer>
    );
}
