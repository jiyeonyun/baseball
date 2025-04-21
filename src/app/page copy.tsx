"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 베이스 정보 (홈 포함)
const bases = [
    { name: "투수", x: 0, y: 0 }, // 투수 (중앙)
    { name: "1루", x: 190, y: -10 }, // 1루 (오른쪽 위)
    { name: "2루", x: 0, y: -200 }, // 2루 (위)
    { name: "3루", x: -190, y: -10 }, // 3루 (왼쪽 위)
    { name: "홈", x: 0, y: 200 }, // 홈 (맨 아래)
];

// 각 베이스 버튼의 위치를 설정 (변경 안함)
const basePositions = [
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // 투수
    "top-[calc(50%)] left-[calc(50%+200px)] -translate-x-1/2 -translate-y-1/2", // 1루
    "top-[calc(50%-200px)] left-1/2 -translate-x-1/2 -translate-y-1/2", // 2루
    "top-[calc(50%)] left-[calc(50%-200px)] -translate-x-1/2 -translate-y-1/2", // 3루
    "top-[calc(50%+200px)] left-1/2 -translate-x-1/2 -translate-y-1/2", // 홈 (맨 아래)
];

export default function Home() {
    const [isRunning, setIsRunning] = useState(false);
    const [currentPos, setCurrentPos] = useState({ x: 0, y: 200 });
    const [path, setPath] = useState<{ x: number; y: number }[]>([]);
    const [introComplete, setIntroComplete] = useState(false); // 인트로 완료 상태

    // 인트로 텍스트가 사라지고 배경이 나타나는 타이밍을 설정
    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroComplete(true); // 인트로 완료 시 배경 보이도록
        }, 3000); // 3초 후 인트로 완료

        return () => clearTimeout(timer); // 타이머 정리
    }, []);

    const handleClick = (index: number) => {
        if (isRunning) return; // 이미 타자가 달리고 있으면 클릭 무효화
        setIsRunning(true);

        // 타자가 지나갈 경로 설정 (현재 클릭한 베이스까지)
        const targetBase = bases[index];
        let newPath: { x: number; y: number }[] = [];

        // 홈에서 시작하는 경로
        if (targetBase.name === "1루") {
            newPath = [bases[4], bases[1]]; // 홈 -> 1루
        } else if (targetBase.name === "2루") {
            newPath = [bases[4], bases[1], bases[2]]; // 홈 -> 1루 -> 2루
        } else if (targetBase.name === "3루") {
            newPath = [bases[1], bases[2], bases[3]]; // 1루 -> 2루 -> 3루
        } else if (targetBase.name === "홈") {
            newPath = [bases[1], bases[2], bases[3], bases[4]]; // 1루 -> 2루 -> 3루 -> 홈
        }

        setPath(newPath);

        // 타자 애니메이션을 각 경로대로 차례대로 이동
        let currentStep = 0;
        const moveInterval = setInterval(() => {
            if (currentStep < newPath.length) {
                const base = newPath[currentStep];
                // 대각선 이동을 위한 x, y 값을 설정 (단순히 목표 베이스의 x, y로 이동)
                setCurrentPos({ x: base.x, y: base.y });
                currentStep++;
            } else {
                clearInterval(moveInterval);
                setCurrentPos({ x: 0, y: 200 }); // 경로가 끝나면 다시 홈으로 이동
                setIsRunning(false); // 애니메이션 끝난 후 다시 클릭 가능
            }
        }, 1000); // 1초마다 이동
    };

    return (
        <div className="relative w-full h-screen bg-green-600 flex items-center justify-center overflow-hidden">
            {/* 인트로 텍스트와 배경 삼각형 */}

            {!introComplete && (
                <>
                    {/* 배경 삼각형 애니메이션 */}
                    <motion.div
                        className="absolute w-full h-full bg-blue-600"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                            zIndex: 1000,
                        }}
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 3, ease: "easeInOut" }} // 배경이 3초 동안 나타나기
                    />
                    <motion.div
                        className="absolute w-full h-full bg-white"
                        style={{
                            clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                            zIndex: 1000,
                        }}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 3, ease: "easeInOut" }} // 배경이 3초 동안 나타나기
                    />

                    {/* 텍스트 */}
                    <motion.div
                        className="absolute text-white text-9xl font-bold z-50"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{
                            opacity: 0,
                            scale: 1.5,
                            y: "-100px", // 입체감이 생기도록 텍스트가 이동
                        }}
                        transition={{ duration: 3 }} // 3초 동안 텍스트 사라지기
                    >
                        Play Ball!
                    </motion.div>
                </>
            )}

            {/* 야구장 다이아몬드 */}
            <div className="absolute w-[300px] h-[300px] rotate-45 border-[6px] border-white"></div>

            {/* 각 루의 버튼 */}
            {bases.map((base, index) => (
                <button
                    key={base.name}
                    className={`absolute ${basePositions[index]} bg-white p-2 rounded-full z-10`}
                    onClick={() => handleClick(index)}
                >
                    {base.name}
                </button>
            ))}

            {/* 타자 애니메이션 (대각선 이동) */}
            {isRunning && (
                <motion.div
                    className="absolute w-8 h-8 bg-yellow-300 rounded-full z-20"
                    initial={{ x: currentPos.x, y: currentPos.y }}
                    animate={{
                        x: currentPos.x,
                        y: currentPos.y,
                        transition: { duration: 1 },
                    }} // 1초마다 대각선으로 이동
                />
            )}
        </div>
    );
}
