import React, { useEffect, useState } from "react";
import "./Post.css"; // CSS file import

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="post-container">
            {posts.map((post) => (
                <div className="post-card" key={post.id}>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                    <button className="post-btn">Read More</button>
                </div>
            ))}
        </div>
    );
}

export default Post;
