import "$styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import { Layout } from "@/modules/Layout";

const roboto = Roboto({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ShareKan",
    description: "Remake of YWC Project",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                {/* <style jsx global>
                    {`
                        :root {
                            --font-roboto: ${roboto.style.fontFamily};
                        }
                    `}
                </style> */}
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
