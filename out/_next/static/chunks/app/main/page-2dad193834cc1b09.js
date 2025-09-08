(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [798],
    {
        630: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => c });
            var r = a(5155),
                s = a(2115),
                l = a(7650),
                i = a(760),
                n = a(7869);
            function d(e) {
                let { data: t, onClose: a } = e,
                    [d, c] = (0, s.useState)(!1);
                if (((0, s.useEffect)(() => (c(!0), () => c(!1)), []), !d)) return null;
                let o = {
                    overlay: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
                    modal: "bg-white dark:bg-slate-800 p-6 rounded-xl w-[90%] max-w-xl shadow-lg relative",
                    closeBtn:
                        "absolute top-3 right-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200",
                    title: "text-2xl font-bold mb-4 text-gray-900",
                    section: "mb-4",
                    sectionTitle:
                        "font-semibold text-blue-600 dark:text-blue-400 border-b border-blue-600 dark:border-blue-400 mb-1",
                    list: "list-disc ml-5 text-gray-700 dark:text-gray-300",
                    stackLabel: "text-sm font-semibold text-gray-700 dark:text-gray-300",
                    stackWrap: "flex flex-wrap gap-2 mt-2",
                    stackItem:
                        "bg-gray-100 dark:bg-slate-600 px-2 py-1 rounded text-xs text-gray-700 dark:text-gray-200",
                };
                return (0, l.createPortal)(
                    (0, r.jsx)(i.N, {
                        children: (0, r.jsx)(n.P.div, {
                            className: o.overlay,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.2 },
                            onClick: a,
                            children: (0, r.jsxs)(n.P.div, {
                                className: o.modal,
                                initial: { scale: 0.9, opacity: 0 },
                                animate: { scale: 1, opacity: 1 },
                                exit: { scale: 0.9, opacity: 0 },
                                transition: { duration: 0.3, ease: "easeInOut" },
                                onClick: (e) => e.stopPropagation(),
                                children: [
                                    (0, r.jsx)("button", { onClick: a, className: o.closeBtn, children: "✕" }),
                                    (0, r.jsx)("h3", { className: o.title, children: "젠트로피" }),
                                    (0, r.jsxs)("div", {
                                        className: o.section,
                                        children: [
                                            (0, r.jsx)("h4", { className: o.sectionTitle, children: "WHAT I LEARN" }),
                                            (0, r.jsx)("ul", {
                                                className: o.list,
                                                children: t.learn.map((e, t) => (0, r.jsx)("li", { children: e }, t)),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: o.section,
                                        children: [
                                            (0, r.jsx)("h4", { className: o.sectionTitle, children: "WHAT I EXPECT" }),
                                            (0, r.jsx)("ul", {
                                                className: o.list,
                                                children: t.expect.map((e, t) => (0, r.jsx)("li", { children: e }, t)),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)("p", { className: o.stackLabel, children: "# What I used" }),
                                            (0, r.jsx)("div", {
                                                className: o.stackWrap,
                                                children: t.stacks.map((e, t) =>
                                                    (0, r.jsx)("span", { className: o.stackItem, children: e }, t)
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                    document.body
                );
            }
            function c(e) {
                let { data: t } = e,
                    [a, l] = (0, s.useState)(!1);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: "p-4 rounded-xl shadow-md bg-white/50 dark:bg-slate-800/80",
                            style: {
                                background: "rgba(211, 211, 211, 0.146)",
                                backdropFilter: "blur(2px)",
                                WebkitBackdropFilter: "blur(2px)",
                                borderRadius: "10px",
                                border: "1px solid rgba(255, 255, 255, 0.18)",
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)("h2", {
                                                className: "text-xl font-bold text-gray-900 dark:text-white",
                                                children: t.name,
                                            }),
                                            (0, r.jsx)("a", {
                                                href: t.url,
                                                className: "text-blue-500 dark:text-blue-400 text-sm",
                                                children: t.url,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: "flex flex-wrap gap-2 mt-2",
                                                children: t.tags.map((e, t) =>
                                                    (0, r.jsx)(
                                                        "span",
                                                        {
                                                            className:
                                                                "bg-gray-200 dark:bg-slate-600 dark:text-slate-200 px-2 py-1 rounded-lg text-sm",
                                                            children: e,
                                                        },
                                                        t
                                                    )
                                                ),
                                            }),
                                            (0, r.jsx)("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                                children: t.period,
                                            }),
                                            (0, r.jsx)("ul", {
                                                className: "mt-2 list-disc ml-5 text-sm",
                                                children: t.tasks.map((e, t) =>
                                                    (0, r.jsx)("li", { className: "text-gray-700", children: e }, t)
                                                ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("button", {
                                        onClick: () => l(!0),
                                        className:
                                            "text-blue-600 dark:text-blue-400 cursor-pointer hover:transition duration-300",
                                        children: "상세 보기",
                                    }),
                                ],
                            }),
                        }),
                        a && (0, r.jsx)(d, { data: t.modal, onClose: () => l(!1) }),
                    ],
                });
            }
        },
        1909: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => d });
            var r = a(5155),
                s = a(2115),
                l = a(760),
                i = a(7869),
                n = a(710);
            let d = () => {
                let [e, t] = (0, s.useState)([]),
                    a = (e) => {
                        t((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
                    };
                return (0, r.jsx)("div", {
                    className: "flex flex-col gap-4",
                    children: [
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
                            details: [
                                "기존 시스템에 비해 가벼운 구조의 단일 페이지 개발",
                                "API 연동부터 UI 구성까지 단독 수행",
                            ],
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
                    ].map((t, s) =>
                        (0, r.jsxs)(
                            "div",
                            {
                                className: "p-6 rounded-lg bg-content2 hover:bg-content3 transition-colors",
                                style: {
                                    background: "rgba(211, 211, 211, 0.146)",
                                    backdropFilter: "blur(2px)",
                                    WebkitBackdropFilter: "blur(2px)",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(255, 255, 255, 0.18)",
                                },
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: "flex justify-between items-center cursor-pointer",
                                        onClick: () => a(s),
                                        children: [
                                            (0, r.jsxs)("div", {
                                                children: [
                                                    (0, r.jsx)("h3", {
                                                        className:
                                                            "text-xl font-bold mb-2 text-gray-900 dark:text-white",
                                                        children: t.title,
                                                    }),
                                                    (0, r.jsx)("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-2",
                                                        children: t.period,
                                                    }),
                                                    (0, r.jsx)("p", {
                                                        className:
                                                            "font-semibold mb-2 text-gray-800 dark:text-gray-200",
                                                        children: t.role,
                                                    }),
                                                    (0, r.jsxs)("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-2",
                                                        children: ["기술 스택: ", t.tech],
                                                    }),
                                                    t.team &&
                                                        (0, r.jsx)("p", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-2",
                                                            children: t.team,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)("div", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: e.includes(s)
                                                    ? (0, r.jsx)(n.GLr, { className: "w-5 h-5" })
                                                    : (0, r.jsx)(n.l7e, { className: "w-5 h-5" }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(l.N, {
                                        children:
                                            e.includes(s) &&
                                            (0, r.jsx)(
                                                i.P.div,
                                                {
                                                    initial: { height: 0, opacity: 0 },
                                                    animate: { height: "auto", opacity: 1 },
                                                    exit: { height: 0, opacity: 0 },
                                                    transition: { duration: 0.4, ease: "easeInOut" },
                                                    className: "overflow-hidden mt-3",
                                                    children: (0, r.jsx)("ul", {
                                                        className: "list-disc list-inside space-y-1",
                                                        children: t.details.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    className:
                                                                        "text-sm text-gray-700 dark:text-gray-300",
                                                                    children: e,
                                                                },
                                                                t
                                                            )
                                                        ),
                                                    }),
                                                },
                                                "details"
                                            ),
                                    }),
                                ],
                            },
                            s
                        )
                    ),
                });
            };
        },
        2424: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => n });
            var r = a(5155),
                s = a(7869);
            let l = [
                    { label: "TypeScript", tooltip: "and.. JavaScript" },
                    { label: "ReactNative", tooltip: "and.. Expo" },
                    { label: "Next.js", tooltip: "and..React" },
                    { label: "Tailwind.css", tooltip: "and ..SCSS / Styled Components" },
                ],
                i = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return {
                        animate: {
                            y: [0, -8, 0, 8, 0],
                            transition: { repeat: 1 / 0, duration: 4, ease: "easeInOut", delay: e },
                        },
                    };
                };
            function n() {
                return (0, r.jsx)("div", {
                    className: "w-full h-[300px] flex items-center justify-center ",
                    children: (0, r.jsx)("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: l.map((e, t) =>
                            (0, r.jsxs)(
                                s.P.div,
                                {
                                    className:
                                        "relative group px-6 py-3 text-center text-xs font-semibold text-gray-900 dark:text-gray-100 bg-contain bg-center bg-no-repeat hover:transition duration-300 cursor-pointer",
                                    variants: i(0.3 * t),
                                    animate: "animate",
                                    style: { backgroundImage: "url('/cloud.png')" },
                                    children: [
                                        e.label,
                                        (0, r.jsx)("div", {
                                            className:
                                                "absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10",
                                            children: (0, r.jsx)("div", {
                                                className:
                                                    "px-3 py-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 text-xs rounded-full shadow-md border border-gray-300 dark:border-slate-600 whitespace-nowrap",
                                                children: e.tooltip,
                                            }),
                                        }),
                                    ],
                                },
                                e.label
                            )
                        ),
                    }),
                });
            }
        },
        3050: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => x });
            var r = a(5155),
                s = a(2115),
                l = a(9911),
                i = a(7650),
                n = a(760),
                d = a(7869);
            function c(e) {
                let { onClose: t } = e,
                    [a, l] = (0, s.useState)(!1);
                if (((0, s.useEffect)(() => (l(!0), () => l(!1)), []), !a)) return null;
                let c = {
                    overlay: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
                    modal: "bg-white dark:bg-slate-800 p-6 rounded-xl w-[90%] h-[90vh] max-w-xl shadow-lg relative flex flex-col",
                    closeBtn:
                        "absolute top-3 right-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200",
                    imageWrap: "flex items-center justify-center",
                    image: "block w-100 h-auto",
                };
                return (0, i.createPortal)(
                    (0, r.jsx)(n.N, {
                        children: (0, r.jsx)(d.P.div, {
                            className: c.overlay,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.2 },
                            onClick: t,
                            children: (0, r.jsxs)(d.P.div, {
                                className: c.modal,
                                initial: { scale: 0.9, opacity: 0 },
                                animate: { scale: 1, opacity: 1 },
                                exit: { scale: 0.9, opacity: 0 },
                                transition: { duration: 0.3, ease: "easeInOut" },
                                onClick: (e) => e.stopPropagation(),
                                children: [
                                    (0, r.jsx)("button", { onClick: t, className: c.closeBtn, children: "✕" }),
                                    (0, r.jsx)("div", {
                                        className: c.imageWrap,
                                        children: (0, r.jsx)("img", { className: c.image, src: "/.jpg", alt: "" }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    document.body
                );
            }
            let o = [
                { name: "정보처리기사 ", reason: "대학생활의 마무리를 위해 취득하였습니다." },
                { name: "ADSP 데이터 분석 준전문가", reason: "데이터 분석 기술 활용 능력 인증" },
            ];
            function x() {
                let [e, t] = (0, s.useState)(!1);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            style: {
                                background: "rgba(211, 211, 211, 0.146)",
                                backdropFilter: "blur(2px)",
                                WebkitBackdropFilter: "blur(2px)",
                                borderRadius: "10px",
                                border: "1px solid rgba(255, 255, 255, 0.18)",
                            },
                            className: "rounded-2xl p-4 bg-white/50 dark:bg-slate-800/80 shadow-sm w-full",
                            children: (0, r.jsxs)("table", {
                                className: "w-full table-auto rounded-2xl",
                                children: [
                                    (0, r.jsx)("thead", {
                                        children: (0, r.jsxs)("tr", {
                                            className:
                                                "bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 text-left",
                                            children: [
                                                (0, r.jsx)("th", {
                                                    className: "p-3 text-sm font-semibold",
                                                    children: "자격명",
                                                }),
                                                (0, r.jsx)("th", {
                                                    className: "p-3 text-sm font-semibold",
                                                    children: "취득 이유",
                                                }),
                                                (0, r.jsx)("th", {
                                                    className: "p-3 text-sm font-semibold text-center",
                                                    children: "자격증",
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)("tbody", {
                                        children: o.map((e, a) =>
                                            (0, r.jsxs)(
                                                "tr",
                                                {
                                                    className:
                                                        "text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-slate-600",
                                                    children: [
                                                        (0, r.jsx)("td", {
                                                            className: "p-3 text-gray-700 dark:text-white",
                                                            children: e.name,
                                                        }),
                                                        (0, r.jsx)("td", {
                                                            className: "p-3 text-gray-700 dark:text-white",
                                                            children: e.reason,
                                                        }),
                                                        (0, r.jsx)("td", {
                                                            className: "p-3 text-center",
                                                            children: (0, r.jsx)(l.Gp9, {
                                                                onClick: () => t(!0),
                                                                className:
                                                                    "mx-auto text-blue-500 dark:text-blue-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors",
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                a
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        }),
                        e && (0, r.jsx)(c, { onClose: () => t(!1) }),
                    ],
                });
            }
        },
        4667: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => n });
            var r = a(5155),
                s = a(2115),
                l = a(9911),
                i = a(7869);
            function n() {
                let [e, t] = (0, s.useState)(!1),
                    [a, n] = (0, s.useState)(50),
                    d = ((e) => {
                        let t = new Date(e);
                        return Math.floor((new Date().getTime() - t.getTime()) / 864e5);
                    })("2022-05-17");
                return (0, r.jsxs)("div", {
                    className: "w-[400px] p-4 flex gap-4 items-center shadow-lg",
                    style: {
                        background: "rgba(211, 211, 211, 0.146)",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                    },
                    children: [
                        (0, r.jsx)(
                            i.P.img,
                            {
                                src: "/baseball.png",
                                alt: "album",
                                className: "w-24 h-24 object-cover rounded-xl",
                                animate: e ? { rotate: 360 } : { rotate: 0 },
                                transition: e ? { repeat: 1 / 0, duration: 6, ease: "linear" } : { duration: 0 },
                            },
                            e ? "playing" : "paused"
                        ),
                        (0, r.jsxs)("div", {
                            className: "flex flex-col justify-between h-full flex-1",
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)("p", {
                                            className: "text-m font-semibold text-gray-900 dark:text-white",
                                            children: "지금은 휴식중 츠츠~ \uD83E\uDDA6\uD83C\uDFDD️",
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "text-xs text-gray-600 dark:text-gray-300 leading-tight",
                                            children: "프론트엔드 개발자",
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "text-xs text-gray-600 dark:text-gray-300",
                                            children: "정확하게 구현된 UI와 직관적인 경험을 좋아해요",
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: "mt-2 flex items-center gap-2",
                                    children: [
                                        (0, r.jsx)("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: "22/05 ~",
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "flex-1 flex items-center",
                                            children: (0, r.jsx)("input", {
                                                type: "range",
                                                min: "0",
                                                max: "100",
                                                value: a,
                                                onChange: (e) => n(e.target.value),
                                                className:
                                                    "w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500",
                                            }),
                                        }),
                                        (0, r.jsxs)("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: ["+", d, "days"],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className:
                                        "mt-3 flex items-center justify-between text-xl text-gray-700 dark:text-gray-300",
                                    children: [
                                        (0, r.jsx)(l.Swo, {
                                            className:
                                                "cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
                                        }),
                                        (0, r.jsx)(l.r7n, {
                                            className:
                                                "cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
                                        }),
                                        (0, r.jsx)("button", {
                                            onClick: () => t((e) => !e),
                                            className:
                                                "bg-white dark:bg-slate-700 text-black dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors",
                                            children: e ? (0, r.jsx)(l.kwt, {}) : (0, r.jsx)(l.gSK, {}),
                                        }),
                                        (0, r.jsx)(l.LxX, {
                                            className:
                                                "cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
                                        }),
                                        (0, r.jsx)(l.dhv, {
                                            className:
                                                "cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
                                        }),
                                    ],
                                }),
                                e &&
                                    (0, r.jsx)("div", {
                                        className: "flex mt-2 gap-1 h-5 items-end",
                                        children: [...Array(30)].map((e, t) =>
                                            (0, r.jsx)(
                                                i.P.div,
                                                {
                                                    className: "w-1 rounded",
                                                    animate: { height: [4, 16, 4] },
                                                    transition: {
                                                        repeat: 1 / 0,
                                                        duration: 0.4 + 0.1 * t,
                                                        ease: "easeInOut",
                                                    },
                                                    style: { background: "lightblue" },
                                                },
                                                t
                                            )
                                        ),
                                    }),
                            ],
                        }),
                    ],
                });
            }
        },
        6057: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 3050)),
                Promise.resolve().then(a.bind(a, 630)),
                Promise.resolve().then(a.bind(a, 9181)),
                Promise.resolve().then(a.bind(a, 7543)),
                Promise.resolve().then(a.bind(a, 4667)),
                Promise.resolve().then(a.bind(a, 7886)),
                Promise.resolve().then(a.bind(a, 2424)),
                Promise.resolve().then(a.bind(a, 8686)),
                Promise.resolve().then(a.bind(a, 1909));
        },
        7543: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => c });
            var r = a(5155),
                s = a(2115),
                l = a(7869),
                i = a(760),
                n = a(9911),
                d = a(9432);
            let c = () => {
                let [e, t] = (0, s.useState)([]),
                    [a, c] = (0, s.useState)(!1),
                    [o, x] = (0, s.useState)(!1),
                    m = [
                        { id: "react", icon: (0, r.jsx)(d.GWR, { className: "w-8 h-8" }), label: "React" },
                        {
                            id: "react-native",
                            icon: (0, r.jsx)(n.rMV, { className: "w-8 h-8" }),
                            label: "React Native",
                        },
                        { id: "typescript", icon: (0, r.jsx)(d.cyb, { className: "w-8 h-8" }), label: "TypeScript" },
                        { id: "javascript", icon: (0, r.jsx)(d.AeH, { className: "w-8 h-8" }), label: "JavaScript" },
                        { id: "nextjs", icon: (0, r.jsx)(d.wlC, { className: "w-8 h-8" }), label: "Next.js" },
                        { id: "baseball", icon: (0, r.jsx)(n.TPt, { className: "w-8 h-8" }), label: "Baseball" },
                    ],
                    h = (e, t) => {
                        e.dataTransfer.setData("text/plain", t);
                    },
                    p = (e) => {
                        let t = (360 * e) / m.length;
                        return {
                            x: Math.round(150 * Math.cos((t * Math.PI) / 180)),
                            y: Math.round(150 * Math.sin((t * Math.PI) / 180)),
                        };
                    };
                return (0, r.jsxs)("div", {
                    className: "w-full max-w-md relative h-[500px] mx-auto",
                    children: [
                        (0, r.jsx)("div", {
                            className:
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]",
                            children: m.map((t, a) => {
                                let { x: s, y: i } = p(a);
                                return (0, r.jsx)(
                                    l.P.div,
                                    {
                                        draggable: !0,
                                        onDragStart: (e) => h(e, t.id),
                                        className: "absolute p-2 rounded-lg cursor-move ".concat(
                                            e.includes(t.id)
                                                ? "bg-green-500 text-white"
                                                : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200"
                                        ),
                                        style: {
                                            left: "calc(40% + ".concat(s, "px)"),
                                            top: "calc(45% + ".concat(i, "px)"),
                                            transform: "translate(-40%, -45%)",
                                        },
                                        animate: { y: [0, -10, 0] },
                                        transition: { duration: 2, repeat: 1 / 0, delay: 0.2 * a },
                                        whileHover: { scale: 1.1 },
                                        whileTap: { scale: 0.9 },
                                        children: t.icon,
                                    },
                                    t.id
                                );
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className:
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center relative overflow-hidden",
                            onDragOver: (e) => {
                                e.preventDefault();
                            },
                            onDrop: (a) => {
                                a.preventDefault();
                                let r = a.dataTransfer.getData("text/plain");
                                if (!e.includes(r)) {
                                    let a = [...e, r];
                                    t(a), a.length === m.length && (c(!0), x(!0));
                                }
                            },
                            children: (0, r.jsx)(i.N, {
                                children: a
                                    ? (0, r.jsx)(l.P.div, {
                                          initial: { opacity: 0 },
                                          animate: { opacity: 1 },
                                          exit: { opacity: 0 },
                                          className: "w-full h-full",
                                          children: (0, r.jsx)("img", {
                                              src: "/img.png",
                                              alt: "Profile",
                                              className: "w-full h-full object-contain rounded-full",
                                          }),
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: "text-center p-4",
                                          children: [
                                              (0, r.jsx)("p", {
                                                  className: "text-gray-500 dark:text-gray-400 mb-2",
                                                  children: "아이콘을 여기에 드래그하세요",
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: "flex flex-wrap gap-2 justify-center",
                                                  children: e.map((e) => {
                                                      let t = m.find((t) => t.id === e);
                                                      return (0, r.jsx)(
                                                          "div",
                                                          {
                                                              className: "p-2 bg-green-500 text-white rounded-lg",
                                                              children: null == t ? void 0 : t.icon,
                                                          },
                                                          e
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                            }),
                        }),
                        (0, r.jsx)(i.N, {
                            children:
                                o &&
                                (0, r.jsxs)(l.P.div, {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: 20 },
                                    className: "absolute bottom-0 left-0 right-0 text-center",
                                    children: [
                                        (0, r.jsx)("h3", {
                                            className: "text-xl font-bold mb-2 text-gray-900 dark:text-white",
                                            children: "프론트엔드 개발자",
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "text-gray-600 dark:text-gray-300",
                                            children: "React와 React Native를 주로 다루는 개발자입니다.",
                                        }),
                                    ],
                                }),
                        }),
                    ],
                });
            };
        },
        7886: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => d });
            var r = a(5155),
                s = a(2115),
                l = a(760),
                i = a(7869),
                n = a(710);
            function d(e) {
                let { icons: t, years: a, description: d } = e,
                    [c, o] = (0, s.useState)(!1),
                    [x, m] = (0, s.useState)(null);
                return (0, r.jsxs)("div", {
                    style: {
                        background: "rgba(211, 211, 211, 0.146)",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                    },
                    className: "rounded-2xl shadow p-4 mb-4 relative",
                    children: [
                        (0, r.jsxs)("div", {
                            className: "flex justify-between items-center cursor-pointer",
                            onClick: () => o(!c),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        t.map((e, t) =>
                                            (0, r.jsxs)(
                                                "div",
                                                {
                                                    className: "relative flex flex-col items-center",
                                                    onMouseEnter: () => m(t),
                                                    onMouseLeave: () => m(null),
                                                    children: [
                                                        x === t &&
                                                            (0, r.jsx)("div", {
                                                                className:
                                                                    "absolute bottom-full mb-1 bg-gray-800 dark:bg-slate-700 text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap",
                                                                children: e.alt,
                                                            }),
                                                        (0, r.jsx)("img", {
                                                            src: e.src,
                                                            alt: e.alt,
                                                            className: "w-10 h-10",
                                                        }),
                                                    ],
                                                },
                                                t
                                            )
                                        ),
                                        (0, r.jsxs)("span", {
                                            className: "text-sm text-gray-600 dark:text-gray-300 font-normal",
                                            children: [a, " Experienced years"],
                                        }),
                                    ],
                                }),
                                d &&
                                    (0, r.jsx)("div", {
                                        className: "text-gray-600 dark:text-gray-300",
                                        children: c
                                            ? (0, r.jsx)(n.GLr, { className: "w-5 h-5" })
                                            : (0, r.jsx)(n.l7e, { className: "w-5 h-5" }),
                                    }),
                            ],
                        }),
                        (0, r.jsx)(l.N, {
                            children:
                                c &&
                                d &&
                                (0, r.jsx)(
                                    i.P.div,
                                    {
                                        initial: { height: 0, opacity: 0 },
                                        animate: { height: "auto", opacity: 1 },
                                        exit: { height: 0, opacity: 0 },
                                        transition: { duration: 0.4, ease: "easeInOut" },
                                        className: "overflow-hidden mt-3",
                                        children: (0, r.jsx)("div", {
                                            className: "text-gray-700 dark:text-gray-200 text-sm whitespace-pre-wrap",
                                            children: d,
                                        }),
                                    },
                                    "desc"
                                ),
                        }),
                    ],
                });
            }
        },
        8686: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => i });
            var r = a(5155);
            a(2115);
            var s = a(9911),
                l = a(7869);
            let i = () => {
                let e = [
                    {
                        icon: (0, r.jsx)(s.hL4, { className: "w-6 h-6" }),
                        href: "https://github.com/jiyeonyun",
                        label: "GitHub",
                    },
                    {
                        icon: (0, r.jsx)(s.maD, { className: "w-6 h-6" }),
                        href: "mailto:jiyeonyun43@gmail.com",
                        label: "Email",
                    },
                    { icon: (0, r.jsx)(s.QEs, { className: "w-6 h-6" }), href: "", label: "LinkedIn" },
                ];
                return (0, r.jsx)("div", {
                    style: {
                        background: "rgba(211, 211, 211, 0.146)",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                    },
                    className: "p-8",
                    children: (0, r.jsxs)(l.P.div, {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5 },
                        className: "flex flex-col items-center gap-6",
                        children: [
                            (0, r.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    (0, r.jsx)("h2", {
                                        className:
                                            "text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent",
                                        children: "YUN JI YEON",
                                    }),
                                    (0, r.jsx)("p", {
                                        className: "text-xl text-gray-700 dark:text-gray-200 mb-4",
                                        children: "FRONTEND DEVELOPER",
                                    }),
                                    (0, r.jsx)("p", {
                                        className: "text-lg text-gray-600 dark:text-gray-300 mb-2",
                                        children: "Position | Developer, Researcher",
                                    }),
                                    (0, r.jsx)("p", {
                                        className: "text-base text-gray-700 dark:text-gray-300 italic",
                                        children: "유저에게 편리함을 주는 서비스를 만드는 개발자",
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: "flex gap-6 mt-4",
                                children: e.map((e, t) =>
                                    (0, r.jsx)(
                                        l.P.a,
                                        {
                                            href: e.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                                "p-3 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-700 dark:text-gray-200",
                                            whileHover: { scale: 1.1 },
                                            whileTap: { scale: 0.95 },
                                            "aria-label": e.label,
                                            children: e.icon,
                                        },
                                        t
                                    )
                                ),
                            }),
                            (0, r.jsx)("div", {
                                className: "mt-6 text-center",
                                children: (0, r.jsx)("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                    children: "\xa9 2024 YUN JI YEON. All rights reserved.",
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        9181: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => l });
            var r = a(5155);
            a(2115);
            var s = a(7869);
            let l = (e) => {
                let { contents: t, name: a, desc: l } = e,
                    i = {
                        wrapper: {
                            background: "rgba(211, 211, 211, 0.146)",
                            backdropFilter: "blur(2px)",
                            WebkitBackdropFilter: "blur(2px)",
                            borderRadius: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                        },
                        name: { boxShadow: "inset 0 -20px 0 #85b8f2" },
                    },
                    n = {
                        container: "p-4",
                        nameText: "inline px-2 text-2xl font-bold text-gray-900 dark:text-white",
                        description: "pt-2 text-sm font-semibold text-gray-700 dark:text-gray-200",
                    },
                    d = {
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
                        },
                    };
                return (0, r.jsx)(s.P.div, {
                    className: n.container,
                    style: i.wrapper,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, amount: 0.3 },
                    variants: d,
                    children: (0, r.jsxs)(s.P.div, {
                        variants: d,
                        children: [
                            (0, r.jsx)("div", { className: n.nameText, style: i.name, children: a }),
                            (0, r.jsx)("div", { className: n.description, children: l }),
                            (0, r.jsx)("br", {}),
                            t,
                        ],
                    }),
                });
            };
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [711, 362, 603, 984, 441, 684, 358], () => t(6057)), (_N_E = e.O());
    },
]);
