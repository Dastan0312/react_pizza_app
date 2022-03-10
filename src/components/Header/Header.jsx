import React from "react";
import styles from "./Header.module.css";
import logo from "../../img/logo.svg";
import { CgShoppingCart } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Header = ({ tagline }) => {
  return (
    <header>
      <NavLink to="/">
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <div>
            <h2>React Pizza</h2>
            <p>{tagline}</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/cart">
        <div className={styles.cartBtn}>
          <span>270 сом</span>|{" "}
          <span>
            <CgShoppingCart /> 3
          </span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
