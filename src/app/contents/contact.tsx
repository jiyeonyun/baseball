import React from "react";

const Contact = () => {
    const containerStyle = {
        background: "rgba(211, 211, 211, 0.146)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };
    return (
        <div style={containerStyle}>
            <div>YUN JI YEON</div>
            <div>FRONTEND DEVELOPER</div>
            <div>Position | Developer, Researcher</div>
            <div>Email | jiyeonyun43@gmail.com</div>
            <div>유저에게 편리함을 주는 서비스를 만드는 개발자</div>
        </div>
    );
};

export default Contact;
