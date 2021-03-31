import React from "react";
import "../Header.css";
import {Link} from "react-router-dom"
function Header() {
  return (
    <div>
      <nav className="container-header">
        <div className="container-h1">
          <h2>Reader</h2>
        </div>
        <div className="container-h2">
          <p id="signUp"><Link className="link" to="/new">New Post</Link></p>
          <p><Link  className="link" to="/">Home</Link></p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
