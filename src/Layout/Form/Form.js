import React from "react";
import styles from "./Form.module.css";

const Form = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

const Control = (props) => {
  return <div className={styles.xxx}>{props.children}</div>;
};

Form.Control = Control;

export default Form;
