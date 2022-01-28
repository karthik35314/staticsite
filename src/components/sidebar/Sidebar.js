import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="side ">    
    <div className="side-box">
    
      <div class="sidenav">
        <div className="items">
          {" "}
          <span>
            {" "}
            <i class="fa fa-home"></i>{" "}
          </span>{" "}
          <a className="sidenav">Overview</a>{" "}
        </div>
        <div className="items">
          {" "}
          <span>
            {" "}
            <i class="fa fa-address-book"></i>
          </span>
          <a className="sidenav"> Details</a>{" "}
        </div>
        <div className="items">
          {" "}
          <span>
            <i class="fa fa-folder"></i>{" "}
          </span>{" "}
          <a className="sidenav">Plan</a>
        </div>
        <div className="items">
          {" "}
          <span>
            {" "}
            <i class="fa fa-phone"></i>{" "}
          </span>{" "}
          <a className="sidenav">Scope of appointment</a>
        </div>
        <div className="items">
          {" "}
          <span>
            {" "}
            <i class="fa fa-cog"></i>{" "}
          </span>{" "}
          <a className="sidenav">Preferences</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
