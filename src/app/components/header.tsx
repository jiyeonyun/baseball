"use client";

import React from "react";
import DarkModeToggle from "./darkMode";

const Header = () => {
    return (
        <div
            className={`
            flex z-40 w-full h-auto items-center justify-between data-[menu-open=true]:border-none sticky top-0 inset-x-0 border-b border-divider backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 
        `}
        >
            <span>YUN JI YEON</span>
            <div className={`flex items-center gap-5`}>
                <span>GITHUB</span>
                <span>NOTION</span>
                <span>BLOG</span>
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Header;
