import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /* state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    console.log(counters);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    /*console.log(counters[index].value);*/
  /* this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("must be deleted");
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }; */
  render() {
    const { onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-sm m-2 btn-info">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            /* Key, value .... all are props */ key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
