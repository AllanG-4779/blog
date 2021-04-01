import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import React from "react";

export const postContext = React.createContext([]);
export const logged = React.createContext([]);

function App() {
  const [isLogged, setLogged] = useState(false);
  const [post, setPost1] = useState([]);
  return (
    <Router>
      <div className="App wrapper">
        <postContext.Provider value={[post, setPost1]}>
          <logged.Provider value={[isLogged, setLogged]}>
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
          </logged.Provider>
        </postContext.Provider>
      </div>
    </Router>
  );
}

export default App;
