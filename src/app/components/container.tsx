"use client";
import React from "react";
import { motion } from "framer-motion";

const Container = ({ contents, name, desc }: any) => {
    const styles = {
        wrapper: {
            background: "rgba(211, 211, 211, 0.146)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
        },
        name: {
            boxShadow: "inset 0 -20px 0 #85b8f2",
        },
    };

    const classNames = {
        container: "p-4",
        nameText: "inline px-2 text-2xl font-bold dark:text-gray",
        description: "pt-2 text-sm font-semibold dark:text-white",
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
            className={classNames.container}
            style={styles.wrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
        >
            <motion.div variants={textVariants}>
                <div className={classNames.nameText} style={styles.name}>
                    {name}
                </div>
                <div className={classNames.description}>{desc}</div>
                <br />
                {contents}
            </motion.div>
        </motion.div>
    );
};

export default Container;
