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
            title: "신규 백오피스 프론트엔드 개발 및 운영",
            period: "2022.07 ~ 진행 중",
            role: "주요 업무: 백오피스 프론트엔드 개발 및 유지보수",
            tech: "React, React Query, styled-components, Recoil",
            details: [
                "기존 JSP 기반 백오피스를 React로 전환하여 UI/UX 개선",
                "고객 및 멤버십 관리 페이지 포함 15개 이상의 페이지 개발",
                "자산 관리 페이지 개발 및 운영: 데이터 조회 이슈를 주 10건 → 2건으로 감소",
                "데이터 시각화 페이지 개발: 펌웨어 업데이트 데이터 관리 자동화 및 시각화 제공",
                "내부 UI 프레임워크 개발을 주도하여 프로젝트 내 UI 일관성 유지",
            ],
        },
        {
            title: "렌탈 서비스 홈페이지 개발",
            period: "2024.01 ~ 2024.03",
            role: "주요 업무: 렌탈 서비스 홈페이지 개발",
            tech: "Next.js, Sass, MariaDB",
            details: [
                "SEO 최적화를 위해 Next.js 도입 및 SSR 적용",
                "출고 현황 페이지 개발 및 카카오 상담톡 연동",
                "게시판 이미지 조회를 위한 간단한 API 개발 및 연동",
            ],
        },
        {
            title: "신규 홈페이지 랜딩 페이지 개발",
            period: "2022.04 ~ 2022.05",
            role: "주요 업무: 랜딩 페이지 및 구매 페이지 개발",
            tech: "React, styled-components",
            details: [
                "ScrollTrigger를 활용한 스크롤 애니메이션 적용",
                "프로젝트 초기 이해 부족으로 발생한 코드 문제를 리팩토링 진행",
                "유지보수성을 개선하여 성능 최적화 및 사용자 경험 향상",
            ],
        },
        {
            title: "React Native 기반 관제 어플 개발",
            period: "2024.07 ~ 2025.03",
            role: "주요 업무: 기존 Flutter 기반 어플을 React Native로 전면 개선",
            tech: "React Native, TypeScript, Recoil, React Query, styled-components",
            details: [
                "기존 Flutter 기반 관제 어플을 React Native로 재개발하여 성능 및 유지보수성 향상",
                "프로젝트의 모든 개발 과정을 단독으로 수행하며, 아키텍처 설계부터 구현까지 담당",
                "TypeScript를 활용하여 안정적인 코드 작성 및 유지보수성을 확보",
                "상태 관리(Recoil) 및 데이터 관리(React Query)를 적용하여 효율적인 데이터 흐름 구성",
                "UI/UX 최적화를 위해 네이티브 모듈과의 연동 및 성능 최적화 진행",
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
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm text-default-500 mb-2">{project.period}</p>
                            <p className="font-semibold mb-2">{project.role}</p>
                            <p className="text-sm text-default-500 mb-2">기술 스택: {project.tech}</p>
                            {project.team && <p className="text-sm text-default-500 mb-2">{project.team}</p>}
                        </div>
                        {openProjects.includes(index) ? (
                            <CgChevronDown className="w-5 h-5" />
                        ) : (
                            <CgChevronLeft className="w-5 h-5" />
                        )}
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
                                        <li key={idx} className="text-sm">
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
