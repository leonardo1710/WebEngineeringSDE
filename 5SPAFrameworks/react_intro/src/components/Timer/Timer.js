import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import './clock.scss';


const Timer = (props) => {
  const { hours = 0, minutes = 0, seconds = 0 } = props.hoursMinSecs;
  // Declare a new state variable
  // useState returns the current state and a setter for the state
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]); // arguments in useState are initial values

  const timeText = props.timeText;
  const [text, setText] = useState([timeText]);

  // function to update the timer state
  const tick = () => {
      if (hrs === 0 && mins === 0 && secs === 0){ // timer has finished
        setText("Time is up...");
      } else if (mins === 0 && secs === 0) {  // an hour passed
        setTime([hrs - 1, 59, 59]);
      } else if (secs === 0) {                // a minute passed
        setTime([hrs, mins - 1, 59]);
      } else {
        setTime([hrs, mins, secs - 1]);       // a second passed
      }
  };

  const getCurrentDate = () => {
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    return date;
  }

  /**
   * Similar to componentDidMount and componentDidUpdate
   * By using this Hook, you tell React that your component needs to do something after render. 
   * React will remember the function you passed (we’ll refer to it as our “effect”), 
   * and call it later after performing the DOM updates.
   */
  useEffect(() => {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
  });

  
  return (
    <Row>
      <div className="clock">
        <div className="clock-date">{ getCurrentDate() }</div>
        <div className="clock-time">
          {
            `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
          }
        </div>
        <div className="clock-text">{ text }</div>
      </div>
    </Row>
  );
}

export default Timer;
