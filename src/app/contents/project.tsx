"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";

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
            details: ["기존 시스템에 비해 가벼운 구조의 단일 페이지 개발", "API 연동부터 UI 구성까지 단독 수행"],
        },
        {
            title: "사내 UI 프레임워크 개발",
            period: "2023.02 ~ 2023.06 (4개월)",
            role: "주요 업무: 사내 UI 프레임워크 개발",
            tech: "React.js, HTML5, CSS3, JavaScript, styled-components",
            team: "개발 인원: 3명",
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
            details: [
                "발주/납품 관리를 위한 웹 시스템 프론트 개발",
                "p-ui 공통 컴포넌트를 활용한 빠른 UI 구성",
                "UI/UX 설계 기획부터 퍼블리싱, API 연동까지 전 과정 참여 중",
            ],
        },
    ];

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
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
                            <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.role}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">기술 스택: {project.tech}</p>
                            {project.team && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.team}</p>
                            )}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
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
                                <ul className="list-disc list-inside space-y-1">
                                    {project.details.map((detail, idx) => (
                                        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Project;
