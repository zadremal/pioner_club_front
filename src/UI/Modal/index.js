import React from "react";
import Modal from "react-modal";
import "./modal.css";
import close from "./close.svg";
import { Image, Button } from "./Styled";

Modal.setAppElement("#root");

const ModalWindow = props => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      closeTimeoutMS={150}
      className="react-modal__body"
      overlayClassName="react-modal__overlay"
    >
      <Button onClick={props.closeModal}>
        <Image src={close} alt="" />
      </Button>
      {props.children}
    </Modal>
  );
};

export default ModalWindow;
