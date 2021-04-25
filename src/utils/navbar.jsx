import React from "react";

const NavBar = () => (
  <div className="bg-dark py-2 px-2">
    <span>
      <a
        className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
        href="https://github.com/jerrycode06/algorithm-visualizer-react"
      >
        <i className="fab text-light fa-github"></i>
        &nbsp; Repo URL
      </a>
      <a
        className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
        href="https://www.linkedin.com/in/nikhil-upadhyay-166673150/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Nikhil Upadhyay
      </a>
    </span>
  </div>
);

export default NavBar;
