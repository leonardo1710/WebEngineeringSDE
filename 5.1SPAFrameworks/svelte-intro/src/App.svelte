<script>
  import Leaderboard from "./lib/Leaderboard.svelte";
  import Timer from "./lib/Timer.svelte";
  import './styles/leaderboard.scss';

  export let teams = ['team y', 'teamx'];
  export let hoursMinSecs = {hours: 0, minutes: 0, seconds: 10} // countdown time

  function fetchTeams() {

  }

</script>


<div class="leaderboard">
  <span class="leaderboard-corner-one"></span>
  <span class="leaderboard-corner-two"></span>

  <div class="leaderboard-inner">
    <span class="title">Programming Escape Room</span>
    <span class="subtitle">FH Campus Wien</span>

    <div>
      <Timer hoursMinSecs={hoursMinSecs}></Timer>
      <!--<Timer @intervalEnded="clearFetchingInterval" :hrs-min-secs="hoursMinSecs" />-->

      <!-- TODO make a component -->
      <div class="mt-4">
        <Leaderboard teams={teams} />      
      </div>

      <!-- Use a Component with props 
      <Loader :loading="loading"></Loader>
      -->
    </div>

  </div>
</div>
<div class="bg-custom"></div>


<style>

</style>
