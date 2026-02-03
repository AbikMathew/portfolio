"use client";

import { motion } from "framer-motion";

const skills = {
    "Mobile": ["Flutter", "Dart", "iOS (Swift/SwiftUI)"],
    "Web": ["HTML/CSS", "Next.js", "Tailwind CSS", "Bootstrap"],
    "Backend & DB": ["Firebase", "Node.js", "MongoDB", "SQLite", "Hive", "AWS"],
    "Tools": ["Git", "Figma", "Postman", "Jira", "ClickUp"],
    "State Management": ["Riverpod", "Bloc", "GetX", "Stacked"],
};

export default function Skills() {
    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif text-center mb-24"
            >
                Technical Arsenal
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-t border-white/10 pt-6"
                    >
                        <h3 className="text-xl font-serif text-gray-500 mb-6">{category}</h3>
                        <ul className="space-y-3">
                            {items.map((item) => (
                                <li key={item} className="text-2xl md:text-3xl font-light hover:text-blue-400 transition-colors cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
