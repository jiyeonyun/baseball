"use client";
import { motion } from "framer-motion";

const techs = [
    { label: "TypeScript", tooltip: "and.. JavaScript" },
    { label: "ReactNative", tooltip: "and.. Expo" },
    { label: "Next.js", tooltip: "and..React" },
    { label: "Tailwind.css", tooltip: "and ..SCSS / Styled Components" },
];

const floatingY = (delay = 0) => ({
    animate: {
        y: [0, -8, 0, 8, 0],
        transition: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay,
        },
    },
});

export default function FloatingTechGrid() {
    return (
        <div className="w-full h-[300px] flex items-center justify-center ">
            <div className="grid grid-cols-2 gap-6">
                {techs.map((tech, index) => (
                    <motion.div
                        key={tech.label}
                        className="relative group px-6 py-3 text-center text-xs font-semibold text-gray-900 dark:text-gray-100 bg-contain bg-center bg-no-repeat hover:transition duration-300 cursor-pointer"
                        variants={floatingY(index * 0.3)}
                        animate="animate"
                        style={{
                            backgroundImage: "url('/cloud.png')",
                        }}
                    >
                        {tech.label}
                        {/* 말풍선 툴팁 */}
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                            <div className="px-3 py-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 text-xs rounded-full shadow-md border border-gray-300 dark:border-slate-600 whitespace-nowrap">
                                {tech.tooltip}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
