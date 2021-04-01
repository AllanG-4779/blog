import React, { useState } from "react";
import "../Posts.css";
import {postContext} from "../App"
import {useContext} from "react"
function Posts(props) {

 const [globalPost,setGlobal] = useContext(postContext)

  return (
    <div>
    {globalPost.length===0?<div className="container-post"><p>Nothing to show at the moment</p></div>
      :globalPost.map((x) => {
        return (
          <div className="container-post" key={Math.random()*1238383.99388584}>
            <p style={{ marginBottom: 4 }}>{x.authors}</p>
            <h4>{x.titles}</h4>
            <div className="time" style={{ marginTop: 6 }}>
              <p>{x.time}</p>
              <p>{x.duration}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
