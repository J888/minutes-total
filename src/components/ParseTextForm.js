import React, { Component } from 'react';
import * as TimeValidators from './../helpers/TimeValidation.js'

class ParseTextForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
        	foundMatchesArray: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.highlightMatches = this.highlightMatches.bind(this);
        this.resetCursor = this.resetCursor.bind(this);
    }

    componentDidMount() {
        var editor = document.getElementById('editor');
        var theParentComponent = this;
        var matches = [];

        editor.addEventListener("input", function() {

        	theParentComponent.resetCursor();

        	// get all the matches in the entire editor string
        	matches = TimeValidators.matchesFoundInText(editor.innerText);
        	
        	// highlight all matches
        	theParentComponent.highlightMatches(matches);
        	      	
        	// change the inner text to only what was typed in.
            // theParentComponent.props.handleChange(editor.innerText);
        }, false);
    }

    highlightMatches(matches) {
        var editor = document.getElementById('editor');
        var editorHTML = document.getElementById('editor').innerHTML;


        for (let match of matches) {
        	
        	if(editorHTML.slice(-31 - match.startIndex) === "<span class='highlighted-text'>") {
        		continue;
        	}

            console.log('match.startIndex = ' + match.startIndex)
            console.log('editorHTML.slice(0, match.startIndex - 1) = ' + editorHTML.slice(0, match.startIndex - 1));
            console.log('editorHTML.slice(match.endIndex + 1, editorHTML.length) = ' + editorHTML.slice(match.endIndex + 1, editorHTML.length));

            var beforeTheStringToHighlight = match.startIndex === 0 ? '' : editorHTML.slice(0, match.startIndex - 1);

            var afterTheStringToHighlight = editorHTML.slice(match.endIndex + 1, editorHTML.length);
            var insert = "<span class='highlighted-text'>" + match.minutesString + "</span>";
            editorHTML = beforeTheStringToHighlight + insert + afterTheStringToHighlight;
        }

        editor.innerHTML = editorHTML;
    }

    resetCursor() {
    	var editor = document.getElementById('editor');
    	var range, selection;

    	if (editor.childNodes.length) {
    		console.log(editor.childNodes)
        	// reset the cursor to the end of the editor
            range = document.createRange();
            selection = window.getSelection();
            range.setStart(editor.childNodes[0], editor.childNodes[0].length)
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            editor.focus();
        }
    }

    render() {
        return (
            <div className="ParseTextForm" id="ParseTextForm" style={{display: 'none'}}>
		  		<div rows="4" cols="50" id="editor"
		  				  placeholder="Paste some text that contains minutes in the format mm:ss or m:ss"
		  				  contentEditable>
				</div>
  			</div>
        );
    }
}


export default ParseTextForm;