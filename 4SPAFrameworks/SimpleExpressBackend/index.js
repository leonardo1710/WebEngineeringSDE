var express = require("express");
const bodyParser = require('body-parser');    // enables accessing the payload of http post requests
const cors = require('cors');

const app = express();
const port = 3001;

// For each request, provide wildcard Access-Control-* headers via OPTIONS call
app.use(cors()); 
// For each request, parse request body into a JavaScript object where header Content-Type is application/json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(port, () => console.log(`Express server running on port ${port}`));

app.get("/team/getAll", (req, res) => {
  return sendResponse(res, 200, teams, true);
});

let teams = [
  {
    teamId: 1,
    team: "TeamX",
    progress: 10,
    timestamp: Date.now()
  },
  {
    teamId: 2,
    team: "Beans",
    progress: 50,
    timestamp: Date.now()
  },
  {
    teamId: 3,
    team: "LiMiTX",
    progress: 30,
    timestamp: Date.now()
  },
  {
    teamId: 4,
    team: "TeamY",
    progress: 70,
    timestamp: Date.now()
  },
  {
    teamId: 5,
    team: "Algodots",
    progress: 30,
    timestamp: Date.now()
  },
];

// helper function to send a response
function sendResponse(response, statusCode, message, success){
  return response.status(statusCode).send({
    success: success,
    message: message
  });
}


