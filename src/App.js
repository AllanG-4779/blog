import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import React from "react";
import ViewPost from "./Components/ViewPost";

export const postContext = React.createContext([]);
export const logged = React.createContext([]);
export const viewContext = React.createContext([])

function App() {
  const [isLogged, setLogged] = useState(false);
  const [post, setPost1] = useState([]);
  const [view,updateView] = useState({})
  return (
    <Router>
      <div className="App wrapper">
        <postContext.Provider value={[post, setPost1]}>
          <logged.Provider value={[isLogged, setLogged]}>
            <viewContext.Provider value = {[view,updateView]}>
              <Header />
              <div className="posts">
                <div></div>
                <Switch>
                  <Route exact path="/">
                    <Posts />
                  </Route>
                  <Route exact path="/new">
                    <CreatePost />
                  </Route>
                  <Route exact path="/View">
                    <ViewPost />
                  </Route>
                </Switch>
                <div></div>
              </div>
              
            </viewContext.Provider>
          </logged.Provider>
        </postContext.Provider>
      </div>
    </Router>
  );
}

export default App;
