import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Abik Mathew George | Senior Software Engineer",
    description: "Senior Flutter Developer & Creative Technologist",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isProd = process.env.NODE_ENV === 'production';
    const bgImage = isProd ? '/portfolio/dark_abstract_background_1770110046912.png' : '/dark_abstract_background_1770110046912.png';

    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-white/20`}
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20, 30, 60, 0.4), rgba(0, 0, 0, 0.8)), url('${bgImage}')`
                }}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
