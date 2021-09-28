<template>
  <b-row id="timer" class="mt-6 mb-6">
    <div class="clock">
      <div class="clock-date">{{ currentDate() }}</div>
      <div class="clock-time">{{ timeLeftFormatted }}</div>
      <div class="clock-text">{{ timeText }}</div>
    </div>
  </b-row>
</template>

<script>

export default {
  name: 'Timer',
  props: {
    timeLeft: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      time: "02:00:00",
      timeText: "Time remaining..."
    }
  },

  computed: {
    date: function(){
      return Date.now();
    },
    timeLeftFormatted: function(){
      let hours = Math.floor(this.timeLeft / 3600);
      let minutes = Math.floor((this.timeLeft - (hours * 3600)) / 60);
      let seconds = Math.floor(this.timeLeft % 60);

      
      // If the value of seconds is less than 10, then display seconds with a leading zero
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      if (minutes < 10) {
        minutes = `0${minutes}`
      }

      if (hours < 10) {
        hours = `0${hours}`
      }

      // The output in HH:MM:SS format
      return `${hours}:${minutes}:${seconds}`
    }
  },

  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
      return date;
    }
  }

}
</script>
