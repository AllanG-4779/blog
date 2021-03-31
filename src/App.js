import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import React from "react";

export const postContext = React.createContext([])




function App() {
   const [post, setPost1] = useState([
     {
       authors: "Allan ",
       titles: "How to become genius",
       posts: "Here are not time to show",
       time: "Null",
       duration: "11 min",
     },
     
   ]);
  return (
    <Router>
      <div className="App wrapper">
        <postContext.Provider value={[post,setPost1]}>
          <Header />
          <div className="posts">
            <div></div>
            <Switch>
              <Route exact path="/">
                <Posts posts={post} />
              </Route>
              <Route exact path="/new">
                <CreatePost />
              </Route>
            </Switch>
            <div></div>
          </div>
          </postContext.Provider>
        </div>
      </Router>
    
  );
}

export default App;
