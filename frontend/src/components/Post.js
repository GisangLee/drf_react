import React from "react";
import { Card, Avatar } from "antd";
import { HeartOutlined, HeartFilled, UserOutlined} from "@ant-design/icons";

const Post = ({post}) => {
    const { title, desc, location, photo } = post;
    return (
        <div>
            <Card
            hoverable
            cover={<img src={photo} alt={desc}/>}
            actions={[<HeartOutlined/>]}
            style={{width: "200"}}
            >
                <Card.Meta
                    avatar={<Avatar icon={<UserOutlined/>} size="large"/>}
                    title={title}
                    description={desc}
                />
            </Card>
        </div>
    )
};

export default Post;