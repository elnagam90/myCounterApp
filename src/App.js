/* import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
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
    console.log(counters[index].value);
    this.setState({ counters });
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
  };
  totalCounters = () => {
    const someOfCounters = this.state.counters.filter((c) => c.value > 0)
      .length;
    this.setState({ someOfCounters });
  }; 
   render() {
    //  return (  );
    //function App() {
    return (
      <React.Fragment>
        <NavBar
           onTotalCounters={this.totalCounters} totalCounters={
             this.state.counters.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

//export default App; */

import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

const App = (props) => {
  const [countersState, setCountersState] = useState({
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 4, value: 0 },
    ],
  });
  const handleIncrement = (counter) => {
    const counters = [...countersState.counters];
    console.log(counters);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(counters[index].value);
    setCountersState({ counters });
  };

  const handleDecrement = (counter) => {
    const counters = [...countersState.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    setCountersState({ counters });
  };

  const handleDelete = (counterId) => {
    console.log("must be deleted");
    const counters = countersState.counters.filter((c) => c.id !== counterId);
    setCountersState({ counters });
  };

  const handleReset = () => {
    const counters = countersState.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCountersState({ counters });
  };
  const totalCounters = () => {
    const someOfCounters = countersState.counters.filter((c) => c.value > 0)
      .length;
    setCountersState({ someOfCounters });
  };

  //  return (  );
  //function App() {
  return (
    <React.Fragment>
      <NavBar
        onTotalCounters={totalCounters}
        totalCounters={countersState.counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={countersState.counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
