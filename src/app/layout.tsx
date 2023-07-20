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
            <body className={NotoSans.className}>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
