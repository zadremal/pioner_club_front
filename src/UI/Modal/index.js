import React from "react";
import Modal from "react-modal";
import "./modal.css";
import close from "./close.svg";
import { Icon, Button } from "./Styled";

Modal.setAppElement("#root");

const ModalWindow = ({ modalIsOpen, closeModal, overflow, children }) => {
  const modalBody = overflow
    ? "react-modal__body--overflow"
    : "react-modal__body";
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      closeTimeoutMS={150}
      className={modalBody}
      overlayClassName="react-modal__overlay"
    >
      <Button onClick={closeModal}>
        <Icon src={close} alt="" />
      </Button>
      {children}
    </Modal>
  );
};

export default ModalWindow;
