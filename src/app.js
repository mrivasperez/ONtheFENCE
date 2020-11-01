import React from "react";
import ReactDOM from "react-dom";
import AddOption from "./components/AddOption";
import Option from "./components/Option";
import Options from "./components/Options";
import User from "./components/User";
import Action from "./components/Action";
import Header from "./components/Header";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    };
  }

  // mount options in locat storage when loaded
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //Do nothig at all
    }
  }
  // save options to local storage when components update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.lenght !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }

  // handle delete options
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      }),
    }));
  }

  // handlePick - pass down to action and setup onClick - bind here
  //randomly pick an option and alert it
  handlePick() {
    let options = this.state.options;
    let option = options[Math.floor(Math.random() * options.length)];
    alert(`This is your option: ${option}`);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  render() {
    const title = "OFF the FENCE";
    const subtitle = "Get off the fence and cut to the chase!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// Add options component - form and submit button.

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
