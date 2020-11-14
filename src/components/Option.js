import React from "react";

export const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.option}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        e.preventDefault();
        console.log("blick");
        props.handleDeleteOption(props.option);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
