import React from "react";
import { Card, Button } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import "./Suggestion.scss";


const Suggestion = () => {
    return(
        <div className="suggestion">
            <div className="avatar">
                <UserOutlined />
            </div>
            <div className="username">
                사용자 이름
            </div>
            <div className="follow_action">
                <Button size="small">팔로우</Button>
            </div>
        </div>
    )
};

export default Suggestion;