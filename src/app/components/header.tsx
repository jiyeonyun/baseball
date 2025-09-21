"use client";

import React from "react";
import DarkModeToggle from "./darkMode";

const headerWrapperClass = `
  flex z-40 w-full h-auto items-center justify-between
  data-[menu-open=true]:border-none sticky top-0 inset-x-0 
  border-b border-divider backdrop-blur-lg 
  data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150
  p-2 cursor-pointer
`;

const navItemsClass = `
  flex items-center gap-5
`;

const Header = () => {
    return (
        <div className={headerWrapperClass}>
            <span className="font-bold">YUN JI YEON</span>
            <div className={navItemsClass}>
                <a href="https://github.com/jiyeonyun">GITHUB</a>
                {/* <a href="https://www.notion.so/Jiyeon-Yun-20aac4c773454df5b42d5d7f37d65627?source=copy_link">NOTION</a> */}
                <a href="https://dkgkrltlfxk.tistory.com/">BLOG</a>
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Header;
