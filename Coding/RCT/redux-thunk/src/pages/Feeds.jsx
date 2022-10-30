import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../redux/feeds/feeds.action";

const Feeds = () => {
  // const [feeds, setFeeds] = useState([]);
  const dispatch=useDispatch();
  const feeds=useSelector(store=>store.feeds.feeds)
  console.log(feeds,"feeds")
  useEffect(() => {
      dispatch(getFeeds());
    // axios.get("http://localhost:8080/feeds").then((d) => {
    //   setFeeds(d.data);
    // });
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
