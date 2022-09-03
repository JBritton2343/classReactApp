import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          Start BootStrap
        </a>
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
        <div style={{marginLeft: "auto"}} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
