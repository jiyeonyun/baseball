"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function CompanyModal({ data, onClose }: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    const classNames = {
        overlay: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
        modal: "bg-white p-6 rounded-xl w-[90%] max-w-xl shadow-lg relative animate-fadeIn",
        closeBtn: "absolute top-3 right-4 text-gray-500 cursor-pointer",
        title: "text-2xl font-bold mb-4",
        section: "mb-4",
        sectionTitle: "font-semibold text-blue-600 border-b border-blue-600 mb-1",
        list: "list-disc ml-5",
        stackLabel: "text-sm font-semibold",
        stackWrap: "flex flex-wrap gap-2 mt-2",
        stackItem: "bg-gray-100 px-2 py-1 rounded text-xs",
    };

    return createPortal(
        <div className={classNames.overlay}>
            <div className={classNames.modal}>
                <button onClick={onClose} className={classNames.closeBtn}>
                    ✕
                </button>

                <h3 className={classNames.title}>회사이름</h3>

                <div className={classNames.section}>
                    <h4 className={classNames.sectionTitle}>WHAT I LEARN</h4>
                    <ul className={classNames.list}>
                        {data.learn.map((item: any, i: number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={classNames.section}>
                    <h4 className={classNames.sectionTitle}>WHAT I EXPECT</h4>
                    <ul className={classNames.list}>
                        {data.expect.map((item: any, i: number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className={classNames.stackLabel}># What I used</p>
                    <div className={classNames.stackWrap}>
                        {data.stacks.map((tech: any, i: number) => (
                            <span key={i} className={classNames.stackItem}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
