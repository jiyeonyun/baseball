import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const noto = Noto_Sans_KR({
    subsets: ["latin"], // 또는 preload: false
});
export const metadata: Metadata = {
    title: "윤지연의 포트폴리오",
    description: "프론트엔드 개발자 윤지연의 포트폴리오입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className={`${noto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
