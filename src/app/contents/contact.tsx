"use client";

import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };

    const socialLinks = [
        {
            icon: <FaGithub className="w-6 h-6" />,
            href: "https://github.com/jiyeonyun",
            label: "GitHub",
        },
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            href: "mailto:jiyeonyun43@gmail.com",
            label: "Email",
        },
        {
            icon: <FaLinkedin className="w-6 h-6" />,
            href: "",
            label: "LinkedIn",
        },
    ];

    return (
        <div style={containerStyle} className="p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                        YUN JI YEON
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">FRONTEND DEVELOPER</p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Position | Developer, Researcher</p>
                    <p className="text-base text-gray-700 dark:text-gray-300 italic">
                        유저에게 편리함을 주는 서비스를 만드는 개발자
                    </p>
                </div>

                <div className="flex gap-6 mt-4">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-700 dark:text-gray-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 YUN JI YEON. All rights reserved.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
