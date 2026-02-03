import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="w-full bg-[#0a0a0a] min-h-screen">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
