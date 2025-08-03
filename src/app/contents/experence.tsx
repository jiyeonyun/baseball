import CompanyCard from "../components/companyCard";

const companies = [
    {
        name: "젠트로피",
        url: "https://www.zentropy.co.kr/",
        tags: ["프론트엔드 개발자"],
        period: "2022/05 ~ 2025/04",
        tasks: [
            "기존 백오피스 유지보수",
            "백오피스 신규 개발",
            "홈페이지 개발",
            "젠탈 홈페이지 개발",
            "관제 어플 개발",
        ],
        modal: {
            learn: [
                "React, Next.js, TypeScript 기반의 모던하고 유지보수 용이한 웹 앱 개발",
                "React Native를 활용한 크로스플랫폼 모바일 앱 개발 경험",
                "지속 가능하고 확장 가능한 소프트웨어 설계 및 개발 역량 강화",
            ],
            expect: [
                "효율적인 백오피스 UI 라이브러리 설계 및 개발",
                "사용자 친화적이고 직관적인 UI/UX 제공",
                "유저 데이터 분석을 통한 전략적 의사결정 지원",
            ],
            stacks: ["TypeScript", "Next.js", "React", "React Native"],
        },
    },
];

export default function CareerSection() {
    return (
        <div className="space-y-6">
            {companies.map((company, index) => (
                <CompanyCard key={index} data={company} />
            ))}
        </div>
    );
}
