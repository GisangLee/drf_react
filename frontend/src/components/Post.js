import React from "react";


const Post = ({post}) => {
    const { title, desc, location, photo } = post;
    return (
        <div>
            {title}
            {desc}
            <img src={photo} alt={desc} style={{width:"100px"}}/>
            {location}
        </div>
    )
};

export default Post;