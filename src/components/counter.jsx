import React, { Component } from "react";

class Counter extends Component {
  /* state = {
    value: this.props.counter.value,
  }; */

  /* handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  }; */
  render() {
    return (
      <React.Fragment>
        <span className={this.sytleNumber()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>

        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  //Method
  sytleNumber() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
