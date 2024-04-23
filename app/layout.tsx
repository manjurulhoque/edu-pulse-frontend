import type { Metadata } from "next";
import "./globals.css";
import "../public/assets/sass/styles.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { AOSInit } from "./components/aos-init";
import React from "react";
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Edu Pulse",
    description: "Learn from the experienced teachers",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <AOSInit />
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
