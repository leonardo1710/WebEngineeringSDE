<template>
  <b-row id="timer" class="mt-6 mb-6">
    <div class="clock">
      <div class="clock-date">{{ currentDate }}</div>
      <div class="clock-time">{{ timeLeftFormatted }}</div>
      <div class="clock-text">{{ timeText }}</div>
    </div>
  </b-row>
</template>

<script>

export default {
  name: 'Timer',  // name of component
  props: {        // properties passed into component
    hrsMinSecs: {
      type: Object,   // properties can be specified in detail
      required: true
    }
  },
  data(){         // component variables
    return {
      timeText: "Time remaining...",
      hrs: this.hrsMinSecs.hours,
      mins: this.hrsMinSecs.minutes,
      secs: this.hrsMinSecs.seconds
    }
  },

  // put complex logic in computed properties - those are cached until underlaying data changes
  computed: { 
    timeLeftFormatted: function(){
      return `${this.hrs.toString().padStart(2, '0')}:${this.mins.toString().padStart(2, '0')}:${this.secs.toString().padStart(2, '0')}`
    },
    currentDate: () => {
      const current = new Date();
      const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
      return date;
    },
  },

  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => this.tick(), 1000);  // run tick() every second
    },
    // function to lower countdown time
    tick() {
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
  },
  // mounted is called after dom was rendered
  mounted() {
    this.startTimer();
  },
}
</script>

<style lang="scss" scoped>
.clock {
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  background-size: 100%;

  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);

  &-time{
      letter-spacing: 0.05em;
      font-size: 80px;
  }
  &-date {
      letter-spacing: 0.1em;
      font-size: 24px;
  }
  &-text {
      letter-spacing: 0.1em;
      font-size: 18px;
  }
}
</style>
