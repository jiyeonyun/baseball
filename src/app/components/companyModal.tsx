"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CompanyModal({ data, onClose }: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    const classNames = {
        overlay: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
        modal: "bg-white p-6 rounded-xl w-[90%] max-w-xl shadow-lg relative",
        closeBtn: "absolute top-3 right-4 text-gray-500 cursor-pointer hover:text-gray-700",
        title: "text-2xl font-bold mb-4 text-gray-900",
        section: "mb-4",
        sectionTitle: "font-semibold text-blue-600 border-b border-blue-600 mb-1",
        list: "list-disc ml-5 text-gray-700",
        stackLabel: "text-sm font-semibold text-gray-900",
        stackWrap: "flex flex-wrap gap-2 mt-2",
        stackItem: "bg-gray-100 px-2 py-1 rounded text-xs text-gray-700",
    };

    return createPortal(
        <AnimatePresence>
            <motion.div
                className={classNames.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
            >
                <motion.div
                    className={classNames.modal}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className={classNames.closeBtn}>
                        ✕
                    </button>

                    <h3 className={classNames.title}>젠트로피</h3>

                    <div className={classNames.section}>
                        <h4 className={classNames.sectionTitle}>WHAT I LEARN</h4>
                        <ul className={classNames.list}>
                            {data.learn.map((item: any, i: number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={classNames.section}>
                        <h4 className={classNames.sectionTitle}>WHAT I EXPECT</h4>
                        <ul className={classNames.list}>
                            {data.expect.map((item: any, i: number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={classNames.stackLabel}># What I used</p>
                        <div className={classNames.stackWrap}>
                            {data.stacks.map((tech: any, i: number) => (
                                <span key={i} className={classNames.stackItem}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}
