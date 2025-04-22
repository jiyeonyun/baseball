"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    const classNames = {
        button: `
            relative w-20 h-10 rounded-full px-2 flex items-center justify-center
            transition-colors duration-500 overflow-hidden shadow-md
            ${isDark ? "bg-gradient-to-r from-indigo-900 to-black" : "bg-gradient-to-r from-yellow-200 to-blue-100"}
        `,
        icon: `
            absolute z-10 text-2xl pointer-events-none transition-all duration-500 text-yellow-500
            ${isDark ? "left-2 animate-pulse" : "right-2 animate-float"}
        `,
        toggle: `
            absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md
            transform transition-transform duration-500 z-0
            ${isDark ? "translate-x-8" : "translate-x-0"}
        `,
    };

    return (
        <button onClick={() => setTheme(isDark ? "light" : "dark")} className={classNames.button}>
            <div className={classNames.icon}>{isDark ? <FaMoon /> : <FaSun />}</div>

            <div className={classNames.toggle} />
        </button>
    );
}
