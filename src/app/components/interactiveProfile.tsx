"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaBaseballBall } from "react-icons/fa";
import { SiReact, SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";

interface Icon {
    id: string;
    icon: React.ReactNode;
    label: string;
}

const InteractiveProfile = () => {
    const [droppedIcons, setDroppedIcons] = useState<string[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const icons: Icon[] = [
        { id: "react", icon: <SiReact className="w-8 h-8" />, label: "React" },
        { id: "react-native", icon: <FaReact className="w-8 h-8" />, label: "React Native" },
        { id: "typescript", icon: <SiTypescript className="w-8 h-8" />, label: "TypeScript" },
        { id: "javascript", icon: <SiJavascript className="w-8 h-8" />, label: "JavaScript" },
        { id: "nextjs", icon: <SiNextdotjs className="w-8 h-8" />, label: "Next.js" },
        { id: "baseball", icon: <FaBaseballBall className="w-8 h-8" />, label: "Baseball" },
    ];

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, iconId: string) => {
        e.dataTransfer.setData("text/plain", iconId);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const iconId = e.dataTransfer.getData("text/plain");
        if (!droppedIcons.includes(iconId)) {
            const newDroppedIcons = [...droppedIcons, iconId];
            setDroppedIcons(newDroppedIcons);

            if (newDroppedIcons.length === icons.length) {
                setShowImage(true);
                setShowDescription(true);
            }
        }
    };

    const calculateIconPosition = (index: number) => {
        const angle = (index * 360) / icons.length;
        const radius = 150;
        const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius);
        const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius);
        return { x, y };
    };

    return (
        <div className="w-full max-w-md relative h-[500px] mx-auto">
            {/* 아이콘 컨테이너 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
                {icons.map((icon, index) => {
                    const { x, y } = calculateIconPosition(index);
                    return (
                        <motion.div
                            key={icon.id}
                            draggable
                            onDragStart={(e) =>
                                handleDragStart(e as unknown as React.DragEvent<HTMLDivElement>, icon.id)
                            }
                            className={`absolute p-2 rounded-lg cursor-move ${
                                droppedIcons.includes(icon.id)
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white"
                            }`}
                            style={{
                                left: `calc(40% + ${x}px)`,
                                top: `calc(45% + ${y}px)`,
                                transform: "translate(-40%, -45%)",
                            }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {icon.icon}
                        </motion.div>
                    );
                })}
            </div>

            {/* 중앙 드롭 영역 */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center relative overflow-hidden"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <AnimatePresence>
                    {showImage ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full"
                        >
                            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </motion.div>
                    ) : (
                        <div className="text-center p-4">
                            <p className="text-gray-500 dark:text-gray-400 mb-2">아이콘을 여기에 드래그하세요</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {droppedIcons.map((iconId) => {
                                    const icon = icons.find((i) => i.id === iconId);
                                    return (
                                        <div key={iconId} className="p-2 bg-green-500 text-white rounded-lg">
                                            {icon?.icon}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* 설명 텍스트 */}
            <AnimatePresence>
                {showDescription && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-0 left-0 right-0 text-center"
                    >
                        <h3 className="text-xl font-bold mb-2">프론트엔드 개발자</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            React와 React Native를 주로 다루는 개발자입니다.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InteractiveProfile;
