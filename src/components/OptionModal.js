import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.clearSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button
      className="button"
      onClick={e => {
        e.preventDefault();
        props.clearSelectedOption();
      }}
    >
      Close
    </button>
  </Modal>
);

export default OptionModal;
