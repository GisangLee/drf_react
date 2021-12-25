import React from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import "./AppLayout.scss";

const AppLayout = (props) => {
    const { children } = props;

    return(
        <>
        <div className="app">
            <AppHeader/>
            <div className="home_content">
                {children}
                <AppSidebar/>
            </div>
            <AppFooter/>
        </div>
        </>
    );
}

export default AppLayout;