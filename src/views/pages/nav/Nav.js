import { CRow, CCol, CLabel } from "@coreui/react";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  return (
    //     <nav className="navContainer">
    //     <ul className="navbarStyle">
    //         <li><Link to="/">Home</Link></li>
    //         <li ><Link to="/reg">Register</Link></li>
    //         <li><Link to="/employee">Employee List</Link></li>
    //         <li><Link to="/userList">User List</Link></li>
    //         <li><Link to="/about">About US</Link></li>

    //     </ul>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/reg">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/employee">
                Employee List
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/userList">
                User List
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
