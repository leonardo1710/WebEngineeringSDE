import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() hrsMinSec: any;

  //hrsMinSecFormatted = "00:00:00"; 
  timeText = "Time remaining...";
  hrs = 0;
  mins = 0;
  secs = 0;
  timerInterval: any;

  constructor() { }

  get hrsMinSecFormatted(){
    return `${this.hrs.toString().padStart(2, '0')}:${this.mins.toString().padStart(2, '0')}:${this.secs.toString().padStart(2, '0')}`;
  }

  ngOnChanges(): void {
    this.hrs = this.hrsMinSec.hours;
    this.mins = this.hrsMinSec.minutes;
    this.secs = this.hrsMinSec.seconds;
  }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    if(this.timerInterval){
      clearInterval(this.timerInterval);  // stop the timer interval
    }
  }

  // get the current date in dd-mm-yyyy format
  currentDate = () => {
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    return date;
  };

   // function to lower countdown time
  tick = () => {
    if (this.hrs === 0 && this.mins === 0 && this.secs === 0){ // timer has finished
      this.timeText = "Time is up...";
    } else if (this.mins === 0 && this.secs === 0) {  // an hour passed
      this.hrs--;
      this.secs = this.mins = 59;
    } else if (this.secs === 0) {                // a minute passed
      this.mins--;
      this.secs = 59;
    } else {
      this.secs--;     // a second passed
    }
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => this.tick(), 1000);  // run tick() every second
  }

}
