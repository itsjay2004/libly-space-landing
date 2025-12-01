import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/blocks/hero/Navbar";
import { Footer } from "@/components/blocks/footer/Footer";


export const metadata: Metadata = {
    title: "Libly Space - Modern Library Management System",
    description: "Libly is a modern library management platform designed to simplify seat management, payment, and membership management for libraries of all sizes. Streamline daily operations, improve accessibility, and deliver a better experience for both staff and owners.",
    keywords:
        "library management system, digital library, book management, library software, LMS for libraries, catalog management, library automation, member management, borrowing system",

    authors: [{ name: "Libly Space" }],
    creator: "Libly Space",
    publisher: "Libly Space",

    openGraph: {
        title: "Libly Space - Modern Library Management System",
        description: "Libly is a modern library management platform designed to simplify seat management, payment, and membership management for libraries of all sizes. Streamline daily operations, improve accessibility, and deliver a better experience for both staff and owners.",
        images: [
            {
                url: "https://libly.space/images/libly-space-logo.png",
                width: 1200,
                height: 1200,
                alt: "Libly Space - Modern Library Management Platform",
            },
        ],
        type: "website",
        locale: "en_US",
        siteName: "Libly Space",
        url: "https://libly.space",
    },
    twitter: {
        card: "summary_large_image",
        title: "Libly Space - Modern Library Management System",
        description: "Libly is a modern library management platform designed to simplify seat management, payment, and membership management for libraries of all sizes. Streamline daily operations, improve accessibility, and deliver a better experience for both staff and owners.",
        images: ["https://libly.space/images/libly-space-logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: "https://libly.space",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="font-dmSansReg"
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
