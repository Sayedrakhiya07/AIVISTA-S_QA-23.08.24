import React from "react";
import "../Styles/Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="group">
        <li>
          <Link to="/Homepage">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/QandA">
            <i className="fas fa-question-circle"></i> Questions
          </Link>
        </li>
        <li>
          <Link to="/Tags">
            <i className="fas fa-users"></i> Tags
          </Link>
        </li>
      </ul>
      <ul className="group">
        <li>
          <Link to="/Homepage">
            <i className="fas fa-cog"></i> Saves
          </Link>
        </li>
        <li>
          <Link to="/Homepage">
            <i className="fas fa-user"></i> Users
          </Link>
        </li>
        <li>
          <Link to="/Collaborations">
            <i className="fas fa-sync-alt"></i> Realtime Collaborations
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
