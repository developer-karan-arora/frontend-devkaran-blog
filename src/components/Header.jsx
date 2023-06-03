import { ContextAuth } from "./context/ContextAuth";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default function Header() {
  let AuthContextValue = useContext(ContextAuth);
  let valueLogin = AuthContextValue.isLogin;
  // console.log(valueLogin);
  let sideBar = useRef();
  function handleSidebar() {
    if (window.innerWidth > 600) return;
    if (sideBar.current.style.display == "block") {
      sideBar.current.style.display = "none";
      return;
    }
    sideBar.current.style.display = "block";
  }
  function handleLogout() {
    alert("Logout clicked");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("userDetail");
      window.location.reload();
  }
  return (
    <div className="header">
      <div className="flex items-center">
        <img
          onClick={handleSidebar}
          src="/menu-burger.svg"
          alt=""
          className="mobile"
        />
        <div className="title">
          <h1>
            <Link to="/">devkaran Blogs</Link>
          </h1>
        </div>
      </div>
      <div className="btn-group center pc-header">
        {
          <div className="btn">
            <Link to="/">Home</Link>
          </div>
        }
        {!valueLogin && (
          <div className="btn">
            <Link to="/login">Login</Link>
          </div>
        )}
        {!valueLogin && (
          <div className="btn">
            <Link to="/register">Register</Link>
          </div>
        )}
        {valueLogin && (
          <div className="btn">
            <Link to="/manage">Manage</Link>
          </div>
        )}
        {valueLogin && (
          <div className="btn">
            <Link to="/write">Write</Link>
          </div>
        )}
        {valueLogin && (
          <div className="btn" onClick={handleLogout}>
            <Link>Logout</Link>
          </div>
        )}
        <button
          type="button"
          className="lightBg checkout rounded-md bg-black px-3 py-1 mx-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          CheckOut
        </button>
        <div className="checkout-container">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/terms">Terms Condition</Link>
            </li>
            <li>
              <Link to="/privicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mobile-sidebar" ref={sideBar}>
        <ul className="mobile">
          {
            <Link to="/">
              <li className="btn">Home</li>
            </Link>
          }
          {!valueLogin && (
            <Link to="/login">
              <li className="btn">Login</li>
            </Link>
          )}
          {!valueLogin && (
            <Link to="/register">
              <li className="btn">Register</li>
            </Link>
          )}
          {valueLogin && (
            <Link to="/manage">
              <li className="btn">Manage</li>
            </Link>
          )}
          {valueLogin && (
            <Link to="/write">
              <li className="btn">Write</li>
            </Link>
          )}
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <Link to="/terms">
            <li>Terms Condition</li>
          </Link>
          <Link to="/privicy">
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
