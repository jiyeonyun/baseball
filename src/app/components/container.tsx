"use client";
import React from "react";
import { motion } from "framer-motion";

const Container = ({ contents, name, desc }: any) => {
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            className="p-4"
            style={containerStyle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
        >
            <motion.div variants={textVariants}>
                <div
                    className="inline px-2 text-2xl font-bold dark:text-gray"
                    style={{ boxShadow: "inset 0 -20px 0 #85b8f2" }}
                >
                    {name}
                </div>
                <div className="pt-2 text-sm font-semibold dark:text-white">{desc}</div>
                <br />
                {contents}
            </motion.div>
        </motion.div>
    );
};

export default Container;
