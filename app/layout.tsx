import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-geist-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Skypiea Jets | Luxury Private Aviation",
    description: "Experience the ultimate in private flight with Skypiea Jets.",
    keywords: ["private jet", "luxury aviation", "charter flights", "Gulfstream G650ER"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                <SmoothScroll>
                    <Navbar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
