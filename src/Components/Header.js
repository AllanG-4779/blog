import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { logged } from "../App";
function Header() {
  const [login, setLogin] = useContext(logged);

  return (
    <div>
      <nav className="container-header">
        <div className="container-h1">
          <h2>Reader</h2>
        </div>
        {login ? (
          <div className="container-h2">
            <p id="signUp">
              <Link className="link" to="/new">
                New Post
              </Link>
            </p>
            <p>
              <Link className="link" to="/">
                Home
              </Link>
            </p>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="button"
              onClick={() => {
                setLogin((prev) => !prev);
              }}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="container-h2">
            <button
              onClick={() => {
                setLogin((prev) => !prev);
              }}
              className="button"
            >
              Login to add post
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
