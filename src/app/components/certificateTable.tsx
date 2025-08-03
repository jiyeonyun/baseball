"use client";

import { useState } from "react";
import { FaFile } from "react-icons/fa";
import CertificateModal from "./certificateModal";

const certifications = [
    {
        name: "정보처리기사 ",
        reason: "대학생활의 마무리를 위해 취득하였습니다.",
    },
    {
        name: "ADSP 데이터 분석 준전문가",
        reason: "데이터 분석 기술 활용 능력 인증",
    },
];

export default function CertificateTable() {
    const [open, setOpen] = useState(false);
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };
    return (
        <>
            <div style={containerStyle} className="rounded-2xl p-4 bg-white/50 dark:bg-slate-800/80 shadow-sm w-full">
                <table className="w-full table-auto rounded-2xl">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 text-left">
                            <th className="p-3 text-sm font-semibold">자격명</th>
                            <th className="p-3 text-sm font-semibold">취득 이유</th>
                            <th className="p-3 text-sm font-semibold text-center">자격증</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certifications.map((cert, i) => (
                            <tr
                                key={i}
                                className="text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-slate-600"
                            >
                                <td className="p-3 text-gray-700 dark:text-white">{cert.name}</td>
                                <td className="p-3 text-gray-700 dark:text-white">{cert.reason}</td>
                                <td className="p-3 text-center">
                                    <FaFile
                                        onClick={() => setOpen(true)}
                                        className="mx-auto text-blue-500 dark:text-blue-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {open && <CertificateModal onClose={() => setOpen(false)} />}
        </>
    );
}
