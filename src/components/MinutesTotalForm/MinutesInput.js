import React, { Component } from 'react';
import * as TimeValidators from '../../helpers/TimeValidation.js'

const MAX_STRING_LENGTH = 5;

class MinutesInput extends Component {
	constructor(props) {
	  super(props);
	  this.state = {value: ''};
	  this.handleChange = this.handleChange.bind(this);
  }

	handleChange(event) {
		var inputString = event.target.value.replace(/ /g, '').replace(/[!-/;-z]/g, '');
		var searchColon = inputString.match(/:/g) || ''; 
		var invalid = ( searchColon && searchColon.length > 1 ) || false;
		var hadInvalidChars = / /.test(inputString) || /[!-/;-z]/.test(inputString);
		var overMaxLength = ( inputString[1] === ':' && inputString.length > 4 ) ||
							( inputString[2] === ':' && inputString.length > 5 );
		
		if(invalid) { //invalid, clear the input
		  this.setState({ value: '' });

		} else if( inputString[1] === ':' && inputString.length > 4 ) { // format m:ss1
			inputString = inputString.slice(0, 4);

		} else if( inputString[2] === ':' && inputString.length > 5 ) { //format mm:ss1
			inputString = inputString.slice(0, 5);

		} else if(inputString.length === 4 && !searchColon) { // 4 numbers entered with no :, assume mm:ss
			inputString = inputString.slice(0, 2) + ':' + inputString.slice(2);

		} else if(inputString.length > 4 && !TimeValidators.isValidTimeInMinutes(inputString)) {
			this.setState({ value: '' });
			invalid = true;
		}

		if(!invalid) {

			if(inputString.length > 4 && !TimeValidators.isValidTimeInMinutes(inputString)) { //not a valid time
				this.setState({ value: '' });
				return;

			} else if(inputString > MAX_STRING_LENGTH) { // string is too long
  			this.setState({ value: inputString.slice(0, MAX_STRING_LENGTH + 1) });
  			return;

  		} else {
  			this.setState({ value: inputString });
  		}
  		
  		if( !hadInvalidChars ) { // only add this time to the total if there were not invalid chars
  			this.props.onChange(inputString, this.props.index);
  		}
  	}
	}

	render() {
		return (
	
		<div className="input-container form-initial">
			<input className = "MinutesInput" type="text" value={this.state.value} onChange={this.handleChange} />
		</div>
		
		);
	}
}

export default MinutesInput;