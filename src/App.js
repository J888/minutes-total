import React, { Component } from 'react';
import './App.css';
import MinutesTotalForm from './components/MinutesTotalForm/MinutesTotalForm.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parseTextFormTotal: '00:00'
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1 id="app-title">Add Minutes Together</h1>
          <MinutesTotalForm/>
        </div>
      </div>
    );
  }
}

export default App;
