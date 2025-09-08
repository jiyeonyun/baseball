"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getImagePath } from "../utils/imagePath";

export default function CertificateModal({ onClose, certificate }: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    const classNames = {
        overlay: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
        modal: "bg-white dark:bg-slate-800 p-6 rounded-xl w-[90%] h-[90vh] max-w-xl shadow-lg relative flex flex-col",
        closeBtn:
            "absolute top-3 right-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200",
        title: "text-2xl font-bold mb-4 text-gray-900 dark:text-white",
        section: "mb-4",
        sectionTitle:
            "font-semibold text-blue-600 dark:text-blue-400 border-b border-blue-600 dark:border-blue-400 mb-1",
        list: "list-disc ml-5 text-gray-700 dark:text-gray-300",
        stackLabel: "text-sm font-semibold text-gray-700 dark:text-gray-300",
        stackWrap: "flex flex-wrap gap-2 mt-2",
        stackItem: "bg-gray-100 dark:bg-slate-600 px-2 py-1 rounded text-xs text-gray-700 dark:text-gray-200",
        imageWrap: "flex items-center justify-center",
        image: "block w-100 h-auto",
    };

    return createPortal(
        <AnimatePresence>
            <motion.div
                className={classNames.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
            >
                <motion.div
                    className={classNames.modal}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={(e) => e.stopPropagation()} // 모달 바깥 누르면 닫히게
                >
                    <button onClick={onClose} className={classNames.closeBtn}>
                        ✕
                    </button>

                    <h3 className={classNames.title}>{certificate?.name || "자격증"}</h3>
                    <div className={classNames.imageWrap}>
                        <img
                            className={classNames.image}
                            src={getImagePath(certificate?.image || "/certiciate.jpg")}
                            alt={certificate?.name || "자격증"}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}
