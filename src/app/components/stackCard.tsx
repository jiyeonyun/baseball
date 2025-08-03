"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";

type StackCardProps = {
    icons: {
        src: string;
        alt: string; // 예: 'JavaScript'
    }[];
    years: number;
    description?: string;
};

export default function StackCard({ icons, years, description }: StackCardProps) {
    const [open, setOpen] = useState(false);
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };
    return (
        <div style={containerStyle} className="rounded-2xl shadow p-4 mb-4 relative">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
                <div className="flex items-center gap-2">
                    {icons.map((icon, idx) => (
                        <div
                            key={idx}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setHoverIdx(idx)}
                            onMouseLeave={() => setHoverIdx(null)}
                        >
                            {hoverIdx === idx && (
                                <div className="absolute bottom-full mb-1 bg-gray-800 dark:bg-slate-700 text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                                    {icon.alt}
                                </div>
                            )}
                            <img src={icon.src} alt={icon.alt} className="w-10 h-10" />
                        </div>
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-normal">
                        {years} Experienced years
                    </span>
                </div>
                {description && (
                    <div className="text-gray-600 dark:text-gray-300">
                        {open ? <CgChevronDown className="w-5 h-5" /> : <CgChevronLeft className="w-5 h-5" />}
                    </div>
                )}
            </div>

            {/* motion 등장 */}
            <AnimatePresence>
                {open && description && (
                    <motion.div
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-3"
                    >
                        <div className="text-gray-700 dark:text-gray-200 text-sm whitespace-pre-wrap">
                            {description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
