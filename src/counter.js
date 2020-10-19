class Counter extends React.Component {
  constructor(props) {
    super(props);
    // this.removeAllHandler = this.removeAllHandler.bind(this);
    this.addOneHandler = this.addOneHandler.bind(this);
    this.minusOneHandler = this.minusOneHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.state = {
      count: 0,
    };
  }

  addOneHandler() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  minusOneHandler() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  resetHandler() {
    this.setState(prevState => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOneHandler}>+1</button>
        <button onClick={this.minusOneHandler}>-1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// Create three methods: addOne, minusOne, reset
// Use alert to print something to screen when ;button is clicked
// Use alert to print something to screen when ;button is clicked
// Wire up onclick and bind in the constructor!

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
