import React from "react";
import s from "./DialogContact.module.css";
import { NavLink } from "react-router-dom";

const DialogContact = props => {
  return (
    <NavLink to={"/dialogs/" + props.id}>
      <div className={s.wrapper}>
        <strong>{props.user} </strong>
      </div>
    </NavLink>
  );
};

export default DialogContact;
