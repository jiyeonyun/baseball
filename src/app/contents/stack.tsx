import React from "react";
import StackCard from "../components/stackCard";

const Stack = () => {
    return (
        <>
            <StackCard
                icons={[
                    { src: "/javascript.svg", alt: "javaScript" },
                    { src: "/typescript.svg", alt: "typeScript" },
                ]}
                years={3}
                description={"이젠 'any'만 보면 눈물이 납니다."}
            />
            <StackCard
                icons={[
                    { src: "/next-js.svg", alt: "next-js" },
                    { src: "/react.svg", alt: "react" },
                    { src: "/react.svg", alt: "react-native" },
                    { src: "/Vue.svg", alt: "vue" },
                ]}
                years={2.5}
                description={"React는 익숙하고, Next.js는 좋아하고, React Native는 도전중이며, Vue는 만져봤습니다."}
            />
            <StackCard
                icons={[
                    { src: "/TailwindCSS-Light.svg", alt: "tailwind-css" },
                    { src: "/StyledComponents.svg", alt: "styled-components" },
                    { src: "/Bootstrap.svg", alt: "Bootstrap" },
                    { src: "/Figma-Dark.svg", alt: "Figma" },
                ]}
                years={3}
                description={"디자인 시스템이 있으면 따르고, 없으면 만듭니다."}
            />
            <StackCard
                icons={[
                    { src: "/Dart-Dark.svg", alt: "dart" },
                    { src: "/Flutter-Dark.svg", alt: "flutter" },
                    { src: "/Python-Light.svg", alt: "python" },
                ]}
                years={1}
                description={"공부는 하고 있고, 언젠가 써먹을 예정입니다."}
            />
        </>
    );
};

export default Stack;
