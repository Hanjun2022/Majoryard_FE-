import React from "react";
import { Link } from "react-router-dom";
import "./MiniNav.css";

const Mininav = ({ buttons }) => {
  return (
    <div className="mini-menu">
      {buttons.map((button) => (
        <Link to={button.path} className="mini-menu-item">
          {button.name}
        </Link>
      ))}
    </div>
  );
};

export default Mininav;
