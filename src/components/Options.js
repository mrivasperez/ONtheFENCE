import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <p>Here are your options:</p>
    {props.options.map(option => {
      console.log(option);
      return (
        <Option
          key={Math.random()}
          handleDeleteOption={props.handleDeleteOption}
          option={option}
        />
      );
    })}
    <button onClick={props.handleDeleteOptions}>Remove all</button>
  </div>
);

export default Options;
