import React from "react";
import "../ViewPost.css";
import {postContext, viewContext} from "../App"
import {useContext} from "react"

function ViewPost() {
const [view_post,setView] = useContext(viewContext)

  
  return (
    <div className="post-view">
      <div className="details">
        <p>
          Posted by  <span style={{ color: "dodgerblue" }}>{view_post.authors}</span>
        </p>
        <p>Posted on  {view_post.time}</p>
      </div>
      <div className="post-content">
        <p>
          {view_post.posts}
        </p>
      </div>
    </div>
  );
}

export default ViewPost;
