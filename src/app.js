const obj = {
  name: "Vikram",
  getName() {
    console.log(this.name)
  }
}

class IndecisionApp extends React.Component {
  render() {
    const title = 'OFF the FENCE';
    const subtitle = "Get off the fence and cut to the chase!";
    const options = [1, 2, 3, 5]

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    )
  }
};

class Action extends React.Component {
  optionHandler() {
    alert('Not workin yet... here is an options tho:');
  }
  render() {
    return (
      <div>
        <button onClick={this.optionHandler}>Pick an option</button>
      </div>
    )
  }
};

// set up and options prop for Options component
// Inside options render the lenght of the array!

// Options class -> static text
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllHandler = this.removeAllHandler.bind(this);
  }
  removeAllHandler() {
    const options = this.props.options;
    alert('Removed all clicked!')
    console.log(options)
  }
  render() {
    const options = this.props.options;
    console.log(options, 'console')
    return (
      <div>
        <p>Here are your options:</p>
         {options.map(option => {
           console.log(option)
           return <Option key={Math.random()} option={option} />
         })}
         <button onClick={this.removeAllHandler}>Remove all</button>
      </div>
    )
  }
}

class Option extends React.Component {

  render() {
    return(
      <li >
        {this.props.option}
      </li>
    )
  }
}
// Add options component - form and submit button.

class AddOption extends React.Component {
  addOptionHandler(e) {
    e.preventDefault()
    
   const option = e.target.elements.option.value.trim();


    if(option) {
      alert(option)
      return e.target.elements.option.value = '';
    }

    return e.target.elements.option.value = '';

  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOptionHandler}>
          <input type="text" name="option" placeholder="Enter option here..." />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

