import React from "react";

export const Option = props => {
  return (
    <li>
      {props.option}
      <button
        onClick={e => {
          e.preventDefault();
          props.handleDeleteOption(props.option);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default Option;
