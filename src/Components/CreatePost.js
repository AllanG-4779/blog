import React, { useState } from "react";
import "../CreatePost.css";
import { postContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CreatePost() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  //context
  const [Post, setPosts] = useContext(postContext);
  var date = new Date();
  //getting current time
  var Month = date.getMonth();
  var month = "";
  switch (Month) {
    case 0:
      month = "Jan";
      break;

    case 1:
      month = "Feb";
      break;

    case 2:
      month = "Mar";
      break;

    case 3:
      month = "Apr";
      break;

    case 4:
      month = "May";
      break;

    case 5:
      month = "Jun";
      break;

    case 6:
      month = "Jul";
      break;

    case 7:
      month = "Aug";
      break;

    case 8:
      month = "Sep";
      break;

    case 9:
      month = "Oct";
      break;

    case 10:
      month = "Nov";
      break;

    case 11:
      month = "Dec";
      break;
    default:
      month = undefined;
      break;
  }
  var Year = date.getFullYear();
  var Day = date.getDate();
  const post_day = `${month} ${Day}, ${Year}`;
  const time_to_read = `${Math.ceil((post.length * 0.7) / 60)} mins Read`;
  const id = Math.random() * Math.pow(54, 5) * 3322244;
  //saving post
  const [save,setSave] = useState(false)
  const submitting = (event) => {
    event.preventDefault();
    if(author.length< 5||title.length<10 ){
        alert("Title or Author has not met the length requirements")
    }else
      if(post.length < 20){
        alert("Post too short")
      }else{
setPosts([
      ...Post,
      {
        id: id,
        authors: author,
        titles: title,
        posts: post,
        time: post_day,
        duration: time_to_read,
      },
    ]);
     setSave(prev=>!prev)
      }
    }
    
  
  return (
    <div>
      <form className="post-cont">
        <h2>Create New Post</h2>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="post title"
        />
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          // @ts-ignore
          rows="10"
          // @ts-ignore
          cols="100"
          placeholder="Add post here"
        ></textarea>
        <div className="commit">
          <button
            style={{
              
              visibility: save ? "hidden" : "visible",
            }}
            className="ink"
            onClick={(e) => submitting(e)}
          >
            Save
          </button>
          <Link
            className="ink"
            style={{
              backgroundColor: "green",
              visibility: save ? "visible" : "hidden",
            }}
            to="/"
          >
            Post
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
