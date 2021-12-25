import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import About from "./About";
import Home from "./Home"
import AccountRoutes from "./accounts";
import Login from "./accounts/Login"
import Profile from "./accounts/Profile"

const Root = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accounts/*" element={<AccountRoutes />}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </AppLayout>
    );
}

export default Root;
