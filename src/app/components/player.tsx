"use client";

import { useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaRandom, FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";
import { getImagePath } from "../utils/imagePath";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(50);
    const getDaysSince = (startDate: string) => {
        const start = new Date(startDate);
        const today = new Date();
        const diff = today.getTime() - start.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    };

    const daysSinceStart = getDaysSince("2022-05-17");
    const togglePlay = () => setIsPlaying((prev) => !prev);
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };
    return (
        <div className="w-[400px] p-4 flex gap-4 items-center shadow-lg" style={containerStyle}>
            {/* 앨범 이미지 */}
            <motion.img
                key={isPlaying ? "playing" : "paused"}
                src={getImagePath("/baseball.png")}
                alt="album"
                className="w-24 h-24 object-cover rounded-xl"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, duration: 6, ease: "linear" } : { duration: 0 }}
            />

            {/* 콘텐츠 */}
            <div className="flex flex-col justify-between h-full flex-1">
                {/* 텍스트 */}
                <div>
                    <p className="text-m font-semibold text-gray-900 dark:text-white">지금은 휴식중 츠츠~ 🦦🏝️</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-tight">프론트엔드 개발자</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                        정확하게 구현된 UI와 직관적인 경험을 좋아해요
                    </p>
                </div>

                {/* 슬라이더 */}
                <div className="mt-2 flex items-center gap-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">22/05 ~</p>
                    <div className="flex-1 flex items-center">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={(e: any) => setProgress(e.target.value)}
                            className="w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                        />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+{daysSinceStart}days</p>
                </div>

                {/* 아이콘들 */}
                <div className="mt-3 flex items-center justify-between text-xl text-gray-700 dark:text-gray-300">
                    <FaRedo className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
                    <FaBackward className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
                    <button
                        onClick={togglePlay}
                        className="bg-white dark:bg-slate-700 text-black dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <FaForward className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
                    <FaRandom className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
                </div>

                {/* 음파 애니메이션 */}
                {isPlaying && (
                    <div className="flex mt-2 gap-1 h-5 items-end">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1 rounded"
                                animate={{ height: [4, 16, 4] }}
                                transition={{ repeat: Infinity, duration: 0.4 + i * 0.1, ease: "easeInOut" }}
                                style={{ background: "lightblue" }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
