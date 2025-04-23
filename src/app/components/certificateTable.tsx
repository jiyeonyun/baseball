"use client";

import { useState } from "react";
import { FaFile } from "react-icons/fa";
import CertificateModal from "./certificateModal";

const certifications = [
    {
        name: "정보처리기사 ",
        reason: "대학생활의 마무리를 위해 취득하였고, 컴퓨터공학에 대한 지식을 갈무리할 좋은 시험이었습니다.",
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
            <div style={containerStyle} className="rounded-2xl  p-4 bg-white shadow-sm w-full">
                <table className="w-full table-auto rounded-2xl">
                    <thead>
                        <tr className="bg-gray-100  text-gray-800 text-left">
                            <th className="p-3 text-sm font-semibold">자격명</th>
                            <th className="p-3 text-sm font-semibold">취득 이유</th>
                            <th className="p-3 text-sm font-semibold text-center">자격증</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certifications.map((cert, i) => (
                            <tr key={i} className="text-sm">
                                <td className="p-3">{cert.name}</td>
                                <td className="p-3">{cert.reason}</td>
                                <td className="p-3 text-center">
                                    <FaFile
                                        onClick={() => setOpen(true)}
                                        className="mx-auto text-blue-500 cursor-pointer"
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
