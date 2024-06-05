import React, { useState } from "react";
import SideBar from "./SideBar"
import Header from "./Header"
import './HeaderSidebarSet.css';


const HeaderSidebarSet = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen);
    };

    return (
        <div>
            <Header onToggleSidebar={toggleSidebar} />
            <div className={isSidebarOpen ? "opened-sidebar" : "closed-sidebar"}>
                <SideBar />
            </div>
        </div>
    );
};

export default HeaderSidebarSet;
