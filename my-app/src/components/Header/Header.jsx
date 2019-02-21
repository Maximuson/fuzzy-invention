import React from "react";
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={s.header}>
      <div>
        <NavLink to="/profile">
          <span>MyPage</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/feed">
          <span>Feed</span>
        </NavLink></div>
      <div>
        <NavLink to="/dialogs">
          <span>Dialogs</span>
        </NavLink></div>
      <div>
        <NavLink to="/logOut">
        <span>Log Out</span>
      </NavLink></div>
    </div>
  );
};

export default Header;