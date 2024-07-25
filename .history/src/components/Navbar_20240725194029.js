import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TextConvertPro">
          {props.logo}
          <button className="btn position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              Pro
            </span>
          </button>
        </Link>
        {/* <a className="navbar-brand" href="#">{props.logo}</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                AboutUs
              </Link>
              {/* <a className="nav-link" href="/about">About</a> */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              style={{ background}}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                <b>{props.mode}</b>
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
