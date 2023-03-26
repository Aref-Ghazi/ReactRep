import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, age, sex, deleteFunc }) => {
  return (
    <div
      className={styles.cardwrapper}
      style={{ backgroundColor: sex === "male" ? "lightgreen" : "pink" }}
    >
      <div>ID: {id}</div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Sex: {sex}</div>
      <div className={styles.deleteButton} onClick={(e) => deleteFunc(e, id)}>
        x
      </div>
    </div>
  );
};

export default Card;
