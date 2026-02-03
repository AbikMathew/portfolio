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
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-white/20`}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
