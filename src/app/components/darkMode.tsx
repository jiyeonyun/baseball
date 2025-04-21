"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // 클라이언트에서만 렌더링하도록 설정
    useEffect(() => {
        setMounted(true);
    }, []);

    // mounted가 false일 때는 렌더링하지 않음
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`
                relative w-20 h-10 rounded-full px-2 flex items-center justify-center
                transition-colors duration-500 overflow-hidden
                ${isDark ? "bg-gradient-to-r from-indigo-900 to-black" : "bg-gradient-to-r from-yellow-200 to-blue-100"}
                shadow-md
            `}
        >
            {/* 아이콘 (노란색으로 변경하고 중앙 정렬) */}
            <div
                className={`
                    absolute z-10 text-2xl pointer-events-none transition-all duration-500
                    ${isDark ? "left-2 animate-pulse text-yellow-500" : "right-2 animate-float text-yellow-500"}
                `}
            >
                {isDark ? <FaMoon /> : <FaSun />}
            </div>

            {/* 토글 버튼 (중앙 정렬) */}
            <div
                className={`
                    absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-500 z-0
                    ${isDark ? "translate-x-8" : "translate-x-0"}
                `}
            />
        </button>
    );
}
