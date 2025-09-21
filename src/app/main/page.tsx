import React from "react";
import Container from "../components/container";
import Intro from "../contents/intro";
import CareerSection from "../contents/experence";
import Stack from "../contents/stack";
import CertificateTable from "../components/certificateTable";
import Contact from "../contents/contact";
import Project from "../contents/project";
import { getImagePath } from "../utils/imagePath";
import AudioPlayer from "../components/player";
import FloatingTechGrid from "../components/tech";
import Core from "../contents/core";

const page = () => {
    return (
        <div className={`w-full`}>
            {/**첫 번째 페이지 - 소개 및 이력서 다운로드 */}
            <div className={`w-full h-screen flex items-center justify-center`}>
                <div className="container py-8 m-auto">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-center mb-8">
                            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">안녕하세요 프론트엔드 개발자</h1>
                            <h1 className="text-5xl font-bold mb-4 text-blue-500 animate-fade-in-up-delay-1">
                                윤지연입니다.
                            </h1>
                            <p className="text-xl mb-6 animate-fade-in-up-delay-2">
                                성장하는 개발자가 되기 위해 항상 고민하고 실천합니다.
                            </p>
                            <div className="flex gap-4 items-center justify-center w-full">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up-delay-3">
                                    이력서 다운로드
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up-delay-3">
                                    포트폴리오 다운로드
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**두 번째 페이지 - 핵심역량 */}

            {/**인트로 섹션 */}
            <div className="flex flex-col items-center justify-center w-full ">
                <div className="flex flex-col relative overflow-hidden height-auto  box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none container p-8 mt-4 mb-12">
                    <div>
                        <div className="mb-4">
                            <Container
                                name={"INTRO"}
                                desc={"예쁘게 구현된 UI와 직관적인 경험을 추구하는 개발자 윤지연(Jinny)입니다"}
                                contents={<Intro />}
                            />
                        </div>
                        <div className="mb-4">
                            <Container name={"CORE"} desc={""} contents={<Core />} />
                        </div>
                        <div className="mb-4">
                            <Container
                                name={"EXPERIENCE"}
                                desc={"한 회사에서 꾸준히, 다채로운 프로젝트를 깊이있게 경험했습니다."}
                                contents={<CareerSection />}
                            />
                        </div>
                        <div className="mb-4">
                            <Container
                                name={"PROJECT"}
                                desc={"다양한 프로젝트 경험을 통해 웹과 모바일 개발 역량을 갖추었습니다."}
                                contents={<Project />}
                            />
                        </div>
                        <div className="mb-4">
                            <Container
                                name={"STACK"}
                                desc={
                                    "익숙한 기술에는 안정성을, 익숙하지 않은 기술에는 빠른 습득력으로 대응하고 있습니다."
                                }
                                contents={<Stack />}
                            />
                        </div>
                        <div className="mb-4">
                            <Container name={"CERTIFICATE"} desc={""} contents={<CertificateTable />} />
                        </div>
                        <div className="mb-4">
                            <Container
                                name={"BLOG"}
                                desc={""}
                                contents={
                                    <iframe
                                        src="https://dkgkrltlfxk.tistory.com/"
                                        width="100%"
                                        height="800px"
                                        style={{ border: "none" }}
                                    ></iframe>
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <Container name={"CONTACT"} desc={""} contents={<Contact />} />
                        </div>
                        <div className="flex flex-wrap items-center justify-center w-full gap-4">
                            <div className="flex-col">
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
            </div>
        </div>
    );
};

export default page;
