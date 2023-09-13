<script>
  let teams = ['team y', 'teamx'];
</script>

<div class="leaderboard-table pt-2">
  <h2 class="text-white mb-2">Leaderboard</h2>

  {#each teams as team}
    <ol>
        { team }
    </ol>
  {/each}
  
</div>

<style>
	
</style>