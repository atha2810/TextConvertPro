import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div classNameName="container-fluid">
        <Link classNameName="navbar-brand" to="/">
          {props.logo}
          <button className="btn position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              Pro
            </span>
          </button>
        </Link>
        {/* <a classNameName="navbar-brand" href="#">{props.logo}</a> */}
        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <Link classNameName="nav-link" to="/about">
                AboutUs
              </Link>
              {/* <a classNameName="nav-link" href="/about">About</a> */}
            </li>
          </ul>
          <form classNameName="d-flex" role="search">
            <div
              classNameName={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                classNameName="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                classNameName="form-check-label"
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
