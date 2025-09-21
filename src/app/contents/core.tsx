import React from "react";
import { getImagePath } from "../utils/imagePath";

const Core = () => {
    return (
        <div className={`w-full flex items-center justify-center dark:bg-slate-900`}>
            <div className="container py-8 m-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                        {/* 카드 1 */}
                        <div
                            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center 
                transform transition duration-300 hover:-translate-y-2 hover:shadow-xl focus:-translate-y-2 focus:shadow-xl"
                        >
                            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700">
                                <img
                                    src={getImagePath("/frontend.png")}
                                    alt="모던 프론트엔드 개발"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">모던 프론트엔드 개발</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                                모던 프론트엔드 개발 React.js를 이용한 프론트엔드 개발경험이 있으며,
                                <br />
                                Javascript(ES6), typescript에 능숙합니다. <br />
                                Next.js와 더불어 핵심적인 React library 활용 경험이 있습니다.
                            </p>
                        </div>

                        {/* 카드 2 */}
                        <div
                            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center 
                transform transition duration-300 hover:-translate-y-2 hover:shadow-xl focus:-translate-y-2 focus:shadow-xl"
                        >
                            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700">
                                <img
                                    src={getImagePath("/communication.png")}
                                    alt="협업과 커뮤니케이션"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">협업과 커뮤니케이션</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                                Github 이용한 협업 경험이 있으며, Jira, Slack, Notion 등의 협업 도구 사용 경험도
                                있습니다. <br /> 기획, 디자인, 총무 등 다양한 직무 경험을 기반으로 다른 직군과 원활한
                                커뮤니케이션이 가능합니다.
                            </p>
                        </div>

                        {/* 카드 3 */}
                        <div
                            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center 
                transform transition duration-300 hover:-translate-y-2 hover:shadow-xl focus:-translate-y-2 focus:shadow-xl"
                        >
                            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700">
                                <img
                                    src={getImagePath("/multi.png")}
                                    alt="멀티 플랫폼 개발"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">멀티 플랫폼 개발</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                                현재는 React Native를 통해 모바일 앱 영역으로 확장 중이며,
                                <br />
                                Flutter를 공부하며 멀티 플랫폼 개발자로의 성장을 준비하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Core;
