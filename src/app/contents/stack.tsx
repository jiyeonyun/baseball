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
                description={"공부했다 츠츠"}
            />
            <StackCard
                icons={[
                    { src: "/next-js.svg", alt: "next-js" },
                    { src: "/react.svg", alt: "react" },
                    { src: "/react.svg", alt: "react-native" },
                    { src: "/Vue.svg", alt: "vue" },
                ]}
                years={2.5}
                description={"공부했다 츠츠"}
            />
            <StackCard
                icons={[
                    { src: "/TailwindCSS-Light.svg", alt: "tailwind-css" },
                    { src: "/StyledComponents.svg", alt: "styled-components" },
                    { src: "/Bootstrap.svg", alt: "Bootstrap" },
                    { src: "/Figma-Dark.svg", alt: "Figma" },
                ]}
                years={3}
                description={"공부했다 츠츠"}
            />
            <StackCard
                icons={[
                    { src: "/Dart-Dark.svg", alt: "dart" },
                    { src: "/Flutter-Dark.svg", alt: "flutter" },
                    { src: "/Python-Light.svg", alt: "python" },
                ]}
                years={1}
                description={"공부중이다 츠츠"}
            />
        </>
    );
};

export default Stack;
