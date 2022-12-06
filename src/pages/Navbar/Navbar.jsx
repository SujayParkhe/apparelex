import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ApparelexLogo } from "../../assets/Apparelex-Logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-logo-container" to="/">
          <ApparelexLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
