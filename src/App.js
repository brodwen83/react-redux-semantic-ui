import React from "react";
import Header from "./layouts/Header";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>App</h1>
        <Header />
      </div>
    );
  }
}

export default App;
