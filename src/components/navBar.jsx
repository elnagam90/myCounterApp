import React, { Component } from "react";

//Stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
          <span className="badge badge-primary m-2">{totalCounters}</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
