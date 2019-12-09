const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const VALID_TIME_REGEX = /^[0-5]?[0-9]:[0-5][0-9]$/;
const VALID_TIME_REGEX_SEARCH_ALL = /[0-5]?[0-9]:[0-5][0-9]/g;

export function isValidTimeInMinutes(testThis) { return(VALID_TIME_REGEX.test(testThis)); }

// converts a minutes string to Integer seconds
export function minutesToSeconds(minutes) {
  var splitResult = minutes.split(':');
  return( parseInt(splitResult[0]) * SECONDS_IN_MINUTE + parseInt(splitResult[1]) )
}

//converts Integer seconds to string equivalent in minutes
export function secondsToTime(seconds) {
  var secString, minString, hourString, remaining, precedingZeroSeconds, precedingZeroMinutes;

  if(seconds < SECONDS_IN_MINUTE) {
    precedingZeroSeconds = seconds < 10 ? '00:0' : '00:';
    return(precedingZeroSeconds + seconds);

  } else if(seconds < SECONDS_IN_HOUR) { // time is in minutes (and seconds)
    minString = Math.floor(seconds/SECONDS_IN_MINUTE).toString();
    secString = (seconds % SECONDS_IN_MINUTE).toString();
    precedingZeroSeconds = secString.length < 2 ? '0' : '';
    return(minString + ':' + precedingZeroSeconds + secString);

  } else {
    hourString = Math.floor(seconds / SECONDS_IN_HOUR).toString();
    remaining = (seconds % SECONDS_IN_HOUR);
    minString = Math.floor(remaining / SECONDS_IN_MINUTE).toString();
    secString = (remaining % SECONDS_IN_MINUTE).toString();
    precedingZeroSeconds = secString.length < 2 ? '0' : '';
    precedingZeroMinutes = minString.length < 2 ? '0' : ''; 
    return(hourString + ':' + precedingZeroMinutes + minString + ':' + precedingZeroSeconds + secString);
  }
}

/* returns array in format 
      [
        { minutesString: "12:34", "startIndex": 0, "endIndex": 4 },
        { ... },
        { ... }
      ]                         */
export function matchesFoundInText(text) { 
  var array1, matchesArray = [];

  while ((array1 = VALID_TIME_REGEX_SEARCH_ALL.exec(text)) !== null) {
    var minutesObject = { 
      "minutesString": array1[0],
      "startIndex": array1.index,
      "endIndex":  VALID_TIME_REGEX_SEARCH_ALL.lastIndex - 1
    }
    matchesArray.push(minutesObject)
  }

  return matchesArray; 
}