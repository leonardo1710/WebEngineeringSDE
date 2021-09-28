/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/leaderboard.scss';
import './styles/clock.scss';
import './styles/style.scss';

import {getAllTeams} from './scripts/team';
import timerModule from './scripts/timer';

// Module pattern in JS
//  The module pattern encapsulates 'privacy', state and organization using closures
//  Protects pieces from leaking to global scope
const app = (function () {
  const init = async () => {
    _requestDataWithAjax();

    let timerEnd = new Date();
    timerEnd.setHours(timerEnd.getHours() + 2);
  
    timerModule.timer.init(timerEnd, document.getElementById('timer'));
    timerModule.timer.start();
  }

  const _requestDataWithAjax = async function (){
    try{
      let teams = await getAllTeams();
      _sortTeams(teams);
      renderRequestedData(teams);
    } catch(err){
      console.error(err);
    };
  }

  let _sortTeams = (teams) => {
    teams.sort((a, b) => {
      return a.progress - b.progress;
    });
  }

  let _hideLoading = () => {
    // eslint-disable-next-line
    const loader = document.getElementsByClassName('loader')[0];
    loader.style.opacity = 0;
    loader.style.visibility = 'gone';
  }
  
  let renderRequestedData = (data) => {
    let listContainer = document.getElementsByClassName("leaderboard-table")[0].getElementsByTagName("ol")[0];   //get the table
    if(listContainer != undefined){
      data.forEach(function(team){
        let listItem = _createListItem(team);
        listContainer.append(listItem);
      })
    }

    _hideLoading();
  }

  /**
   * Creates a list element with specific text content
   */
  let _createListItem = (team) => {
      let li = document.createElement("LI");      // creates a list element (node)
      let mark = document.createElement("MARK");
      let img = document.createElement("IMG");

      mark.textContent = team.team;
      img.src = "http://www.rewards1.com/uploads/avatar/203.jpg"; // default image

      li.append(mark);
      li.append(img);

      return li;
  }
  //public functions and variables
  return {
     init
  }
}());

app.init();
