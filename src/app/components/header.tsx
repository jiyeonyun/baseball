"use client";

import React from "react";
import DarkModeToggle from "./darkMode";

const headerWrapperClass = `
  flex z-40 w-full h-auto items-center justify-between
  data-[menu-open=true]:border-none sticky top-0 inset-x-0 
  border-b border-divider backdrop-blur-lg 
  data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150
  p-2
`;

const navItemsClass = `
  flex items-center gap-5
`;

const Header = () => {
    return (
        <div className={headerWrapperClass}>
            <span>YUN JI YEON</span>
            <div className={navItemsClass}>
                <span>GITHUB</span>
                <span>NOTION</span>
                <span>BLOG</span>
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Header;
