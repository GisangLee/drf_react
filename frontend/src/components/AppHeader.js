import React from "react";
import { Input, Menu } from 'antd';
import "./AppHeader.scss"
import LogoImage from "../assets/insta_logo.png";

const AppHeader = () => {
    const { Search } = Input;

    const onSearch = value => console.log(value);
    
    return(
        <div className="header">
            <div className="header_nav">
                <img src={LogoImage} alt="logo" style={{width:"150px"}}/>
                <div className="search">
                    <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                    />
                </div>
                <div className="nav_menu">
                    <Menu mode="horizontal">
                        <Menu.Item key="1">메뉴1</Menu.Item>
                        <Menu.Item key="2">메뉴2</Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;