"use client";
import { useState } from "react";
import CompanyModal from "./companyModal";

export default function CompanyCard({ data }: any) {
    const [open, setOpen] = useState(false);

    const classNames = {
        wrapper: "p-4 rounded-xl shadow-md bg-white/50",
        header: "flex items-center justify-between",
        url: "text-blue-500 text-sm",
        tagWrap: "flex flex-wrap gap-2 mt-2",
        tag: "bg-gray-200 px-2 py-1 rounded-lg text-sm",
        period: "text-sm text-gray-500 mt-1",
        tasks: "mt-2 list-disc ml-5 text-sm",
        detailBtn: "text-blue-600 cursor-pointer hover:transition duration-300",
    };
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };
    return (
        <>
            <div className={classNames.wrapper} style={containerStyle}>
                <div className={classNames.header}>
                    <div>
                        <h2 className="text-xl font-bold">{data.name}</h2>
                        <a href={data.url} className={classNames.url}>
                            {data.url}
                        </a>
                        <div className={classNames.tagWrap}>
                            {data.tags.map((tag: any, i: number) => (
                                <span key={i} className={classNames.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className={classNames.period}>{data.period}</p>
                        <ul className={classNames.tasks}>
                            {data.tasks.map((task: any, i: number) => (
                                <li key={i}>{task}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={() => setOpen(true)} className={classNames.detailBtn}>
                        상세 보기
                    </button>
                </div>
            </div>
            {open && <CompanyModal data={data.modal} onClose={() => setOpen(false)} />}
        </>
    );
}
