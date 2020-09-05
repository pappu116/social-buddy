import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'
const Home = () => {
    const [post,setPost]=useState([])
    const url ='https://jsonplaceholder.typicode.com/posts/'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data => setPost(data))
    })
    return (
        <div className="home">
            <h1>Todays Posts 📋 {post.length}</h1>
            {
                post.map(post =><Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;