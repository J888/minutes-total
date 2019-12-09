import React, { Component } from 'react';
import MinutesInput from './MinutesInput.js';
import * as TimeValidators from '../../helpers/TimeValidation.js'
import ParseTextForm from '../ParseTextForm.js'

class MinutesInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [0],
      total: 0
    };

    this.addInputs = this.addInputs.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.recalculateTotal = this.recalculateTotal.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.openParseText = this.openParseText.bind(this);
    this.handleParseTextChange = this.handleParseTextChange.bind(this);
  }

  addInputs() { this.setState({ inputs: [...this.state.inputs, 0] }); }

  updateTotal(newValue, whichMinutesInput) {
    var currentInputs = this.state.inputs;
    var currentMinutesInput = this.state.inputs[whichMinutesInput];

    newValue = newValue === '' ? '00:00' : newValue;

    if(TimeValidators.isValidTimeInMinutes(newValue)) {
      var inputInSeconds, difference;

      inputInSeconds = TimeValidators.minutesToSeconds(newValue); // convert the new input value to seconds  

      if( (difference = inputInSeconds - currentMinutesInput) === 0 ) { // return if the value has not been changed
        return;
      } 

      currentInputs[whichMinutesInput] = currentMinutesInput + difference; // add/subtract) to/from current input
 
      this.setState(
        {inputs: currentInputs},
        () => this.setState({ total: this.recalculateTotal() })
      );
    }
  }

  recalculateTotal() {
    var newTotal = 0;
    for (var i = 0; i < this.state.inputs.length ; i++) {
      newTotal += this.state.inputs[i];
    }
    return(newTotal);
  }

  resetAll() {
    this.setState({ inputs: [], total: 0 });

    if(document.getElementById('ParseTextForm').style.display === '') {
      document.getElementById('parse-text-form-text-area').value = '';
    }
  }

  openParseText() {
    this.resetAll();

    var parseTextForm = document.getElementById('ParseTextForm');
    var formInitialElements = document.getElementsByClassName('form-initial');
    if(parseTextForm.style.display !== 'none') {
      parseTextForm.style.display = 'none';

      for (let element of formInitialElements) {
        element.style.display = '';
      }
    } else {
      parseTextForm.style.display = '';

      for (let element of formInitialElements) {
        element.style.display = 'none';
      }
    }

  }

  handleParseTextChange(text) {
    
    /* returns array in format 
      [
        { minutesString: "12:34", "startIndex": 0, "endIndex": 4 },
        { ... },
        { ... }
      ]                         */
    var minuteObjects = TimeValidators.matchesFoundInText(text) || [];
    
    var secondsTotal = 0, totalMinutesString = '';
    
    for (let minuteObject of minuteObjects) {

      //add seconds to the total
      secondsTotal += TimeValidators.minutesToSeconds(minuteObject.minutesString);
    }
    
    this.setState({
      total: secondsTotal
    });
  }

  render() {
    return (
      <div className = "MinutesInputForm" >
        <h2 id="total-time-number">Total: {TimeValidators.secondsToTime(this.state.total)}</h2>
        <button className="action-button" id="remove-all-times-button" onClick={this.resetAll}>Reset</button>
        <button className="action-button" id="parse-text-with-times-button" onClick={this.openParseText}>Parse Text</button>
        {
          this.state.inputs.map((id, index) =>
            <MinutesInput key={index} index={index} onChange={this.updateTotal}/>
          )
        }
        <button id="add-times-button" className="form-initial" onClick={this.addInputs}>+</button>
        <ParseTextForm handleChange={this.handleParseTextChange}/>
      </div>
    );
  }
}

export default MinutesInputForm;