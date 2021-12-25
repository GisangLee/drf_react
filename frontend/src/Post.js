import React from "react";


const Post = ({post}) => {
    const { id, title, desc, location, photo, author } = post;
    return (
        <div key={id}>
            {title}
            {desc}
            <img src={photo} alt={desc} style={{width:"100px"}}/>
            {location}
        </div>
    )
};

export default Post;