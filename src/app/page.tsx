import React from "react";
import AudioPlayer from "./components/player";

const page = () => {
    return (
        <div className={`container py-8 mt-4 m-auto`}>
            {/**메인 섹션 */}
            <div className={`flex flex-wrap w-full min-h-[40rem]`}>
                <div className="flex flex-col items-center justify-center flex-1 gap-4 min-w-[20rem]">
                    <div>이미지</div>
                    <div>
                        <h3>머시기 개발자</h3>
                        <p>블라블라블라</p>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-wrap items-center justify-center w-full h-full gap-4 gap-y-4">
                        <div className="flex-col">
                            <div className="flex-col">
                                <div className="flex justify-between items-center group w-full ">
                                    <span className="text-lg font-semibold">본캐</span>
                                    {/* <img
                                        src="/lion.png"
                                        alt="본캐"
                                        className="h-15 w-20 transition-transform duration-500 group-hover:translate-x-[-400%]"
                                    /> */}
                                </div>
                                <img src="https://ghchart.rshah.org/jiyeonyun" />
                            </div>
                            <div className="flex-col">
                                <div className="flex justify-between items-center group w-full  ">
                                    <span className="text-lg font-semibold">부캐</span>
                                    {/* <img
                                        src="/yagulion.png"
                                        alt="본캐"
                                        className="h-40 w-40 transition-transform duration-500 group-hover:translate-x-[-300%]"
                                    /> */}
                                </div>
                                <img src="https://ghchart.rshah.org/jiyeonyunjyyun" />
                            </div>
                            <AudioPlayer />
                        </div>
                    </div>
                </div>
            </div>
            {/**인트로 섹션 */}
            <div></div>
        </div>
    );
};

export default page;
