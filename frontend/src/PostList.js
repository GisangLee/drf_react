import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "Post";

const API_URL = "http://127.0.0.1:8000/api/posts/";

const PostList = () => {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axios.get(API_URL)
        .then(res => {
            const { data } = res;
            setPostList(data);
            console.log(res)
        })
        .catch(error => { 
            console.error(error.response);
        })
    }, [])

    return(
        <div>
            <h1>PostList</h1>
            {postList.map((post) => {
                return <Post post={post} key={post.id}/>
            })}
        </div>
    )
}

export default PostList;