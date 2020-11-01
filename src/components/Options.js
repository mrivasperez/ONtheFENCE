import React from "react";

const Options = props => {
  const options = props.options;
  console.log(options, "console");
  return (
    <div>
      <p>Here are your options:</p>
      {options.map(option => {
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
};

export default Options;
