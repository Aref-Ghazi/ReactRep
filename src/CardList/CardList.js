import React from "react";
import Card from "../Card/Card";
// import styles from "./CardList.module.css";

const CardList = ({ nameList, deleteFunc }) => {
  const cards = nameList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} deleteFunc={deleteFunc} id={id} />
  ));

  return <div className="mainContainer">{cards}</div>;

  // return (
  //   <div>
  //     {nameList.map(({ name, age, sex }, idx) => (
  //       <div className="cardwrapper" key={idx}>
  //         <div>Name: {name}</div>
  //         <div>Age: {age}</div>
  //         <div>Sex: {sex}</div>
  //       </div>
  //     ))}
  //     ;
  //   </div>
  // );
};

export default CardList;
