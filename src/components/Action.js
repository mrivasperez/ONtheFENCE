import React from "react";

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        Pick an option
      </button>
    </div>
  );
};

export default Action;
