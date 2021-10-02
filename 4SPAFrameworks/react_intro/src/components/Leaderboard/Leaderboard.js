const Leaderboard = (props) => {

  const listItems = props.teams.map((team) =>
    <li key={team.teamId.toString()}>
      <mark>{team.team}</mark>
      <img alt="avatar" src="http://www.rewards1.com/uploads/avatar/203.jpg" />
    </li>
  );

  return (
    <div className="leaderboard-table pt-2">
      <h2 className="text-white mb-2">Leaderboard</h2>
      <ol>
        { listItems }
      </ol>
    </div>
  );
}

export default Leaderboard;