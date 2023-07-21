import "$styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Layout } from "@/modules/Layout";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: "ShareKan",
    description: "Remake of YWC Project",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const NotoSans = localFont({ src: "../../public/fonts/NotoSansThai.ttf" });

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
            <body className={NotoSans.className}>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
