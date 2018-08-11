import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { menu } from "./menu";

const MainMenu = () => {
  return (
    <div className={"col-md-12"}>
      {Object.keys(menu).map(page => (
        <div key={page} className={"col-md-4 main-menu-link"}>
          <span style={{ backgroundColor: menu[page].bgColor }}>
            <Link to={`/assignment/${page}`}>{menu[page].name}</Link>
          </span>
        </div>
      ))}
    </div>
  );
};

MainMenu.propTypes = {};

export default MainMenu;
