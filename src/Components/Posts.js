import React, { useState } from "react";
import "../Posts.css";
import { postContext, viewContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Posts(props) {
  const [globalPost, setGlobal] = useContext(postContext);
  const [view,updateView] = useContext(viewContext)

  return (
    <div>
      {globalPost.length === 0 ? (
        <div className="container-post">
          <p>Nothing to show at the moment</p>
        </div>
      ) : (
        globalPost.map((x) => {
          return (
            <div
              className="container-post"
              key={x.id}
            >
              <Link to="/View"className="clickable" onClick={()=>{
                updateView(globalPost.find(p=>p.id===x.id))
              }}>
                <p style={{ marginBottom: 4 }}>{x.authors}</p>
                <h4>{x.titles}</h4>
              </Link>
              <div className="time" style={{ marginTop: 6 }}>
                <p>{x.time}</p>
                <p>{x.duration}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Posts;
