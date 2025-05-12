"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const styles = {
    intro: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    introBg: {
        position: "absolute" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    introLogo: {
        position: "relative" as const,
        animation: "slideUp 1s ease-out forwards",
    },
    fadeOut: {
        animation: "fadeOut 1s ease-out forwards",
    },
};
const MainIntro = () => {
    const router = useRouter();
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowIntro(false);
        }, 2000);
        setTimeout(() => {
            router.push("/main");
        }, 3000);
    }, []);
    return (
        <>
            <style jsx global>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    from {
                        opacity: 1;
                        transform: scale(1);
                    }
                    to {
                        opacity: 0;
                        transform: scale(0) rotate(360deg);
                    }
                }
            `}</style>

            <div style={{ ...styles.intro, ...(!showIntro ? {} : {}) }}>
                <div style={styles.introBg}>
                    <Image src="/introBg.jpg" alt="Intro Background" fill style={{ objectFit: "cover" }} priority />
                </div>
                <div style={styles.introLogo}>
                    <Image src="/introLogo.png" alt="Intro Logo" width={400} height={400} priority />
                </div>
            </div>
        </>
    );
};

export default MainIntro;
