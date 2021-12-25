import React from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import "./AppHeader.scss";


const AppLayout = (props) => {
    const { children } = props;

    return(
        <>
            <AppHeader/>
            {children}
            <AppFooter/>
        </>
    );
}

export default AppLayout;