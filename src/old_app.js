// stateless functional component
// is a react component that is a function and does not have state.

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

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

Header.defaultProps = {
  title: "some default!",
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        Pick an option
      </button>
    </div>
  );
};

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

const Option = props => {
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

// Add options component - form and submit button.

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const User = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
