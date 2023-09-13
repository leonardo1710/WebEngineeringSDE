<script>
  import '../styles/timer.scss';
  let currentDate;
  let timeLeftFormatted;
  let timeText;

</script>

<div id="timer" class="mt-6 mb-6">
  <div class="clock">
    <div class="clock-date">{{ currentDate }}</div>
    <div class="clock-time">{{ timeLeftFormatted }}</div>
    <div class="clock-text">{{ timeText }}</div>
  </div>
</div>