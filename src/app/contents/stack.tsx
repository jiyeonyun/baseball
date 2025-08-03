import React from "react";
import StackCard from "../components/stackCard";
import { getImagePath } from "../utils/imagePath";

const Stack = () => {
    return (
        <>
            <StackCard
                icons={[
                    { src: getImagePath("/javascript.svg"), alt: "javaScript" },
                    { src: getImagePath("/typescript.svg"), alt: "typeScript" },
                ]}
                years={3}
                description={"이젠 'any'만 보면 눈물이 납니다."}
            />
            <StackCard
                icons={[
                    { src: getImagePath("/next-js.svg"), alt: "next-js" },
                    { src: getImagePath("/react.svg"), alt: "react" },
                    { src: getImagePath("/react.svg"), alt: "react-native" },
                    { src: getImagePath("/Vue.svg"), alt: "vue" },
                ]}
                years={2.5}
                description={"React는 익숙하고, Next.js는 좋아하고, React Native는 도전중이며, Vue는 만져봤습니다."}
            />
            <StackCard
                icons={[
                    { src: getImagePath("/TailwindCSS-Light.svg"), alt: "tailwind-css" },
                    { src: getImagePath("/StyledComponents.svg"), alt: "styled-components" },
                    { src: getImagePath("/Bootstrap.svg"), alt: "Bootstrap" },
                    { src: getImagePath("/Figma-Dark.svg"), alt: "Figma" },
                ]}
                years={3}
                description={"디자인 시스템이 있으면 따르고, 없으면 만듭니다."}
            />
            <StackCard
                icons={[
                    { src: getImagePath("/Dart-Dark.svg"), alt: "dart" },
                    { src: getImagePath("/Flutter-Dark.svg"), alt: "flutter" },
                    { src: getImagePath("/Python-Light.svg"), alt: "python" },
                ]}
                years={1}
                description={"공부는 하고 있고, 언젠가 써먹을 예정입니다."}
            />
        </>
    );
};

export default Stack;
