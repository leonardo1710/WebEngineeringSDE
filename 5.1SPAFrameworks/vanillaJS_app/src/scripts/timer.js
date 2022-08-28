/* eslint-disable */

const timer = (function(){
  let endTime;
  let clockDate, clockTime, clockText;

  const init = (timeToEnd, parentElement) => {
    let element = parentElement;
    endTime = timeToEnd;
    if(element instanceof HTMLElement){
      element.innerHTML = _getTimerHTML();

      clockDate = document.getElementsByClassName('clock-date')[0];
      clockTime = document.getElementsByClassName('clock-time')[0];
      clockText = document.getElementsByClassName('clock-text')[0];

      clockDate.textContent = new Date().toDateString();
    } else {
      console.error(`Parent element ${element} is not an HTMLElement.`)
    }
  }

  const _getTimerHTML = () => {
    return '<div class="clock">' + 
              '<div class="clock-date"></div>' +
              '<div class="clock-time"></div>' +
              '<div class="clock-text">Time remaining...</div>' +
            '</div>'
  }


  const start = () => {
    const intervaller = setInterval(function(){
      let now = new Date();

      let diff = endTime - now;
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      clockTime.textContent = `${hours}:${minutes}:${seconds}`;

      if (diff < 0) {
        clearInterval(intervaller);
        console.log("Timer expired.");
      }
    })
  };

  const stop = () => {
    
  };

  return {
    init,
    start,
    stop,
  };
}());

export default { timer };
