import CompanyCard from "../components/companyCard";

const companies = [
    {
        name: "회사이름",
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
                "React, Next, Typescript 기반의 깔끔한 웹 앱",
                "MSA 아키텍처와의 원활한 JSON 상호작용",
                "지속 가능한 소프트웨어 개발",
                "오디오를 사용하는 모던 웹사이트 개발 경험",
            ],
            expect: [
                "백오피스 UI 라이브러리 개발",
                "직관적인 UI와 UX 제공",
                "유저 데이터를 기반으로 한 의사 결정 고도화",
            ],
            stacks: ["TypeScript", "Next.js", "MUI", "AWS"],
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
