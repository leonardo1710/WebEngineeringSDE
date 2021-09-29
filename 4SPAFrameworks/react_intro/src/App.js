import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './styles/leaderboard.scss';
import Timer from './components/Timer/Timer';
import Loader from './components/Loader/Loader';
import React, { useState, useEffect } from 'react';
import { getAllTeams } from './services/team.service';

function App() {
  const hoursMinSecs = {hours: 0, minutes: 0, seconds: 10} // countdown time
  const [loading, setLoading] = useState(true); // whether async request is still going on
  const [teams, setTeams] = useState([]); // teams for leaderboard

  const listItems = teams.map((team) =>
    <li key={team.teamId.toString()}>
      <mark>{team.team}</mark>
      <img alt="avatar" src="http://www.rewards1.com/uploads/avatar/203.jpg" />
    </li>
  );

  const sortTeams = (list) => {
    list.sort((a, b) => {
      return a.progress - b.progress;
    });
  }

  useEffect(() => {
    async function fetchTeams() {
      let response = await getAllTeams();

      if(response.length > 0){
        sortTeams(response);
        setTeams(response);
      }
      
      setLoading(false);
    }

    fetchTeams()
  }, [])

  return (
    <Container fluid>
      <Row>
        <div className="leaderboard">
          <span className="leaderboard-corner-one"></span>
          <span className="leaderboard-corner-two"></span>

          <div className="leaderboard-inner">
            <Row>
              <span className="title">Programming Escape Room</span>
            </Row>
            <Row>
              <span className="subtitle">FH Campus Wien</span>
            </Row>
 
            <Timer hoursMinSecs={hoursMinSecs} timeText="Time remaining..."></Timer>

            <Row className="mt-4">
                {/** TODO make Component */}
                <div className="leaderboard-table pt-2">
                  <h2 className="text-white mb-2">Leaderboard</h2>
                  <ol>
                    { listItems }
                  </ol>
                </div>
            </Row>

            <Loader loading={loading}></Loader>

          </div>
        </div>
      </Row>
      <div className="bg-custom"></div>
    </Container>
  );
}

export default App;
