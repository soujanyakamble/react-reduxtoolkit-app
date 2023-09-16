import React from "react";
import { Link } from "react-router-dom";

export default function Navabar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/">
                <a class="nav-link active">Home</a>
              </Link>
              <Link to="/blog">
                <a class="nav-link active">Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
