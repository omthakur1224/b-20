import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/posts/post.action";

const Posts = () => {
  // const [posts, setPosts] = useState([]);
  const dispatch=useDispatch();
  const posts=useSelector(store=>store.posts.POSTs)
  useEffect(() => {
    // axios.get("http://localhost:8080/posts").then((d) => {
    //   setPosts(d.data);
    // });
    dispatch(getPost());
  }, []);
  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
