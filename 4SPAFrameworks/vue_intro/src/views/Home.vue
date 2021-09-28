<template>
  <b-container fluid>
    <b-row>
      <div class="leaderboard">
          <span class="leaderboard-corner-one"></span>
          <span class="leaderboard-corner-two"></span>
      
    
          <div class="leaderboard-inner">
            <b-row>
              <span class="title">Programming Escape Room</span>
            </b-row>
            <b-row>
              <span class="subtitle">FH Campus Wien</span>
            </b-row>
            
            <!-- Use a Component with props -->
            <Timer :time-left="timeLeft" />

            <!-- TODO make a component -->
            <b-row class="mt-4">
                <div class="leaderboard-table pt-2">
                  <h2 class="text-white mb-2">Leaderboard</h2>
                  <ol>
                    <li v-for="team in teams" :key="team.teamId">
                      <mark>{{ team.team }}</mark>
                      <img src="http://www.rewards1.com/uploads/avatar/203.jpg" />
                    </li>
                  </ol>
                </div>
            </b-row>
            
            <Loader :loading="loading"></Loader>
    
          </div>
        </div>
    </b-row>
    <div class="bg-custom"></div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Timer from '@/components/Timer.vue';
import Loader from '@/components/Loader.vue';
import {getAllTeams} from '@/services/team.service';

export default {
  name: 'Home',
  components: {
    Timer,
    Loader
  },
  data() {
    return {
      timerInterval: null,
      timePassed: 0,
      hours: 2,
      loading: true,
      teams: []
    }
  },
  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    },
    timeLimit(){
      return this.hours*60*60;
    }
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },

    async getLeaderboard(){
      this.teams = await getAllTeams();
      this.sortTeams(this.teams);
      this.loading = false;
    },

    sortTeams(teams){
      console.log('teams :>> ', teams);
      teams.sort((a, b) => {
        return a.progress - b.progress;
      });
    }
  },

  mounted() {
    this.startTimer();

    try{
      this.getLeaderboard();
    } catch(err){
      console.error(err);
    }
  },
}
</script>
