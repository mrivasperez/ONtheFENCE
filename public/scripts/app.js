"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional component
// is a react component that is a function and does not have state.

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  // mount options in locat storage when loaded


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        //Do nothig at all
      }
    }
    // save options to local storage when components update

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.lenght !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saving data");
      }
    }

    // handle delete options

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }

    // handlePick - pass down to action and setup onClick - bind here
    //randomly pick an option and alert it

  }, {
    key: "handlePick",
    value: function handlePick() {
      var options = this.state.options;
      var option = options[Math.floor(Math.random() * options.length)];
      alert("This is your option: " + option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "OFF the FENCE";
      var subtitle = "Get off the fence and cut to the chase!";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h3",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "some default!"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "Pick an option"
    )
  );
};

var Options = function Options(props) {
  var options = props.options;
  console.log(options, "console");
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Here are your options:"
    ),
    options.map(function (option) {
      console.log(option);
      return React.createElement(Option, {
        key: Math.random(),
        handleDeleteOption: props.handleDeleteOption,
        option: option
      });
    }),
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove all"
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "li",
    null,
    props.option,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          e.preventDefault();
          props.handleDeleteOption(props.option);
        }
      },
      "Remove"
    )
  );
};

// Add options component - form and submit button.

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age: ",
      props.age
    )
  );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
