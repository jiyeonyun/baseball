import React from "react";
import AudioPlayer from "./components/player";
import Github from "./components/github";
import FloatingTechGrid from "./components/tech";
import Container from "./components/container";
import Intro from "./contents/intro";

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
                            <Github id="jiyeonyun" name="본캐" />
                            <Github id="jiyeonyunjyyun" name="부캐" />
                            <div className="flex items-center gap-2">
                                <div className="flex-[7]">
                                    <AudioPlayer />
                                </div>
                                <div className="flex-[3]">
                                    <FloatingTechGrid />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**인트로 섹션 */}
            <div className="flex flex-col items-center justify-center w-full ">
                <div className="flex flex-col relative overflow-hidden height-auto  box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none container p-8 mt-4 mb-12">
                    <div>
                        <div className="mb-4">
                            <Container
                                name={"INTRO"}
                                desc={"편리함을 추구하는 개발자 윤지연(Handy)입니다"}
                                contents={<Intro />}
                            />
                        </div>
                        <div className="mb-4">
                            <Container name={"EXPERIENCE"} desc={"머라고적지"} contents={<></>} />
                        </div>
                        <div className="mb-4">
                            <Container name={"PROJECT"} desc={"머라고적지"} contents={<></>} />
                        </div>
                        <div className="mb-4">
                            <Container name={"STACK"} desc={"머라고적지"} contents={<></>} />
                        </div>
                        <div className="mb-4">
                            <Container name={"CERTIFICATE"} desc={"머라고적지"} contents={<></>} />
                        </div>
                        <div className="mb-4">
                            <Container name={"BLOG"} desc={"머라고적지"} contents={<></>} />
                        </div>
                        <div className="mb-4">
                            <Container name={"CONTACT"} desc={"머라고적지"} contents={<></>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
