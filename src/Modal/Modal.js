import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBackdrop : null}`}
      onClick={close}
    ></div>
  );
};
const OverLay = ({ show, children }) => {
  return (
    <div className={`${styles.overLay} ${show ? styles.showOverLay : null}`}>
      {children}
    </div>
  );
};
const Modal = ({ show, closeModal, children }) => {
  return (
    // show && (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop close={closeModal} show={show} />
          <OverLay show={show}>{children}</OverLay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
    // )
  );
};

export default Modal;
