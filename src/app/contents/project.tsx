"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";
import { getImagePath } from "../utils/imagePath";

const Project = () => {
    const [openProjects, setOpenProjects] = useState<number[]>([]);

    const toggleProject = (index: number) => {
        setOpenProjects((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
    };

    const projects = [
        {
            title: "신규 백오피스(nZeus) 프론트엔드 개발 및 운영",
            period: "2022.07 ~ 2025.04",
            role: "주요 업무: 백오피스 프론트엔드 개발 및 유지보수",
            tech: "React, TypeScript, React Query, Recoil, styled-components",
            team: "개발 인원: 프론트엔드 2명 / 백엔드 3명",
            screenshot: "/nzeus-screenshot.png",
            deviceType: "desktop",
            details: [
                "기존 JSP 기반 백오피스를 React 기반 SPA로 리뉴얼하여 사용자 경험 향상",
                "차량, 스테이션, 고객, 주문, 게시판 등 총 17개 이상의 기능 페이지 개발",
                "자산 관리 페이지 개선을 통해 개발팀에 요청되던 데이터 조회 이슈를 주 10건 → 2건으로 감소",
                "관제 이슈 대응을 위한 전용 기능 화면 설계 및 개발 (AS코드, 대차 등)",
                "펌웨어 업데이트 이력을 자동 수집 및 시각화하는 데이터 시각화 페이지 구현",
                "공통 UI 컴포넌트 라이브러리(p-ui) 개발 및 도입으로 UI 일관성과 생산성 향상",
            ],
        },
        {
            title: "관제 모바일 앱(mZeus) 개발",
            period: "2024.12 ~ 2025.03",
            role: "주요 업무: 모바일 관제 앱 기획 및 단독 개발",
            tech: "React Native, Expo",
            team: "개발 인원: 프론트엔드 1명 / 백엔드 1명",
            screenshot: "/mzeus-screenshot.png",
            deviceType: "mobile",
            details: [
                "현장 출동 인력의 업무 효율성을 위해 전용 모바일 앱 설계 및 개발",
                "강제 입출고 등 핵심 관제 기능을 모바일 환경에 맞게 최적화 구현",
                "Expo 기반으로 iOS/Android 동시 배포 가능 구조 구축",
                "모바일 UI에 특화된 터치 및 UX 구조 설계",
            ],
        },
        {
            title: "홈페이지 리뉴얼 프로젝트",
            period: "2023.04 ~ 2023.07",
            role: "주요 업무: 홈페이지 개편 및 구매 기능 도입",
            tech: "Next.js, TypeScript, Zustand, styled-components",
            team: "개발 인원: 프론트엔드 2명 / 백엔드 3명",
            screenshot: "/homepage.webp",
            deviceType: "desktop",
            details: [
                "jQuery 기반 홈페이지를 Next.js SPA 구조로 전환하여 속도 및 유지보수 개선",
                "상품 구매 기능 추가 및 KISPG 결제 시스템 연동",
                "Zustand를 통한 구매 흐름의 상태 일관성 확보",
                "SEO 최적화 및 반응형 UI 적용",
            ],
        },
        {
            title: "Zental 페이지 개발",
            period: "2023.01 ~ 2023.03",
            role: "주요 업무: 내부 웹 페이지 단독 개발",
            tech: "Next.js, TypeScript",
            team: "개발 인원: 프론트엔드 1명",
            screenshot: "/zental.webp",
            deviceType: "desktop",
            details: ["기존 시스템에 비해 가벼운 구조의 단일 페이지 개발", "API 연동부터 UI 구성까지 단독 수행"],
        },
        {
            title: "사내 UI 프레임워크 개발",
            period: "2023.02 ~ 2023.06 (4개월)",
            role: "주요 업무: 사내 UI 프레임워크 개발",
            tech: "React.js, HTML5, CSS3, JavaScript, styled-components",
            team: "개발 인원: 3명",
            screenshot: "/pui.webp",
            deviceType: "desktop",
            details: [
                "기존에 분산된 UI 요소를 통합하여 일관된 UI/UX 제공",
                "React.js 기반으로 재사용 가능한 UI 컴포넌트 개발",
                "디자인 가이드에 맞춘 스타일 적용으로 개발 및 유지보수 효율성 향상",
                "팀원들과 협업하여 UI 요소 디자인 및 기능 개선 진행",
            ],
        },
        {
            title: "발주 시스템 프론트엔드 개발",
            period: "2024.11 ~ 진행 중",
            role: "주요 업무: 발주/재고 관리 시스템 개발",
            tech: "Next.js, TypeScript",
            team: "개발 인원: 프론트엔드 1명",
            screenshot: "/order-system-screenshot.png",
            deviceType: "desktop",
            details: [
                "발주/납품 관리를 위한 웹 시스템 프론트 개발",
                "p-ui 공통 컴포넌트를 활용한 빠른 UI 구성",
                "UI/UX 설계 기획부터 퍼블리싱, API 연동까지 전 과정 참여 중",
            ],
        },
        {
            title: "야구일기 어플 (개인프로젝트)",
            period: "2025.05 ~ 진행 중",
            role: "프론트엔드 개발, 기획",
            tech: "ReactNative,Expo, TypeScript",
            team: "개발 인원: 프론트엔드 1명",
            screenshot: "/yagu.png",
            deviceType: "mobile",
            details: [
                "직관간 날의 점수와 기분 사진등을 기록할수있는 어플",
                "직관 승률을 계산할수있는 기능 추가",
                "실제 사용 인원 6명 확보!",
            ],
        },
    ];

    // 모니터 목업 컴포넌트 (데스크톱)
    const MonitorMockup = ({ screenshot }: { screenshot: string }) => (
        <div className="relative w-full max-w-sm">
            {/* 모니터 베이스 */}
            <div className="relative bg-gray-800 rounded-lg p-3 shadow-2xl">
                {/* 모니터 스크린 */}
                <div className="relative bg-black rounded-lg overflow-hidden">
                    {/* 스크린 내부 */}
                    <div className="relative aspect-video bg-gray-100">
                        <img
                            src={getImagePath(screenshot)}
                            alt="프로젝트 스크린샷"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const placeholder = target.nextElementSibling as HTMLElement;
                                if (placeholder) placeholder.style.display = "flex";
                            }}
                        />
                        <div
                            className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
                            style={{ display: "none" }}
                        >
                            스크린샷 준비 중
                        </div>
                    </div>
                </div>
                {/* 모니터 스탠드 */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );

    // 긴 이미지를 위한 스크롤 가능한 모니터 목업 컴포넌트 (zental 전용)
    const ScrollableMonitorMockup = ({ screenshot }: { screenshot: string }) => (
        <div className="relative w-full max-w-sm">
            {/* 스크롤 힌트 */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full z-10 animate-bounce">
                📜 스크롤해보세요
            </div>

            {/* 모니터 베이스 */}
            <div className="relative bg-gray-800 rounded-lg p-3 shadow-2xl">
                {/* 모니터 스크린 */}
                <div className="relative bg-black rounded-lg overflow-hidden">
                    {/* 스크린 내부 - 스크롤 가능 */}
                    <div className="relative aspect-video bg-gray-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 group">
                        {/* 스크롤 인디케이터 */}
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
                            ↓ 스크롤
                        </div>

                        <img
                            src={getImagePath(screenshot)}
                            alt="프로젝트 스크린샷"
                            className="w-full h-auto min-h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const placeholder = target.nextElementSibling as HTMLElement;
                                if (placeholder) placeholder.style.display = "flex";
                            }}
                        />
                        <div
                            className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
                            style={{ display: "none" }}
                        >
                            스크린샷 준비 중
                        </div>
                    </div>
                </div>
                {/* 모니터 스탠드 */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );

    // 아이폰 목업 컴포넌트 (모바일)
    const iPhoneMockup = ({ screenshot }: { screenshot: string }) => {
        return (
            <div className="relative w-full max-w-48">
                {/* 아이폰 베이스 */}
                <div className="relative bg-gray-900 rounded-3xl p-1.5 shadow-2xl">
                    {/* 아이폰 스크린 */}
                    <div className="relative bg-black rounded-2xl overflow-hidden">
                        {/* 스크린 내부 */}
                        <div className="relative aspect-[9/19.5] bg-gray-100">
                            <img
                                src={getImagePath(screenshot)}
                                alt="모바일 앱 스크린샷"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    const placeholder = target.nextElementSibling as HTMLElement;
                                    if (placeholder) placeholder.style.display = "flex";
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-xs"
                                style={{ display: "none" }}
                            >
                                스크린샷 준비 중
                            </div>
                        </div>
                    </div>
                    {/* 홈 버튼 */}
                    <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-600 rounded-full"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="p-6 rounded-lg bg-content2 hover:bg-content3 transition-colors"
                    style={{
                        background: "rgba(211, 211, 211, 0.146)",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                    }}
                >
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleProject(index)}
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
                            <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.role}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">기술 스택: {project.tech}</p>
                            {project.team && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.team}</p>
                            )}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 ml-4">
                            {openProjects.includes(index) ? (
                                <CgChevronDown className="w-5 h-5" />
                            ) : (
                                <CgChevronLeft className="w-5 h-5" />
                            )}
                        </div>
                    </div>

                    <AnimatePresence>
                        {openProjects.includes(index) && (
                            <motion.div
                                key="details"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden mt-3"
                            >
                                {/* 설명 | 이미지 레이아웃 */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                    {/* 왼쪽: 프로젝트 상세 정보 */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            프로젝트 상세
                                        </h4>
                                        <ul className="list-disc list-inside space-y-2">
                                            {project.details.map((detail, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                                                >
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 오른쪽: 디바이스 목업과 스크린샷 */}
                                    {project.screenshot && (
                                        <div className="flex justify-center">
                                            {project.deviceType === "mobile"
                                                ? iPhoneMockup({ screenshot: project.screenshot })
                                                : project.screenshot === "/zental.webp"
                                                ? ScrollableMonitorMockup({ screenshot: project.screenshot })
                                                : MonitorMockup({ screenshot: project.screenshot })}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Project;
