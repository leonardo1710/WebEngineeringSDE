import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './styles/leaderboard.scss'; 
import Timer from './components/Timer/Timer';
import Loader from './components/Loader/Loader';
import Leaderboard from './components/Leaderboard/Leaderboard';
import React, { useState, useEffect } from 'react';
import { getAllTeams } from './services/team.service';

function App() {
  const hoursMinSecs = {hours: 0, minutes: 0, seconds: 10} // countdown time
  const [loading, setLoading] = useState(true); // whether async request is still going on
  const [teams, setTeams] = useState([]); // teams for leaderboard

  const [messageText, setMessageText] = useState("");

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
                <Leaderboard teams={teams}/>
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
