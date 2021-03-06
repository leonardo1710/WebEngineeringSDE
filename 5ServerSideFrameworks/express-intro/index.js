/**
 * third party libraries
 */
const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express')

const db = require('./database/database');

dotenv.config();  // config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content


class App{
  /**
     * Sets the properties to be used by this class to create the server
     */
    constructor() {
      this.app = express();
      this.apolloServer;

      //Literal object containing the configurations
      this.configs = {
          get port() {
              return process.env.PORT || 3001
          },
      }

      this.applyMiddleware();
      this.applyEndpoints();
    }

    /**
     * Applies any middleware to be used by this app
     */
    applyMiddleware() {
      // For each request, provide wildcard Access-Control-* headers via OPTIONS call
      this.app.use(cors()); 

      // For each request, parse request body into a JavaScript object where header Content-Type is application/json
      this.app.use(express.json());
      this.app.use(express.urlencoded({
        extended: true
      }));
    }

    applyEndpoints(){
      this.app.get("/authors", (req, res) => {
         return db.authors.findAll().then(authors => res.json(authors));
      });

      this.app.get("/posts", (req, res) => {
        return db.posts.findAll().then(authors => res.json(authors));
      });
    }

    async applyGraphQLMiddleware(){
      // create new apollo server and add graphql types and queries
      this.apolloServer = new ApolloServer({
        playground: true,
        modules: [
          require('./graphql/authors'),
          require('./graphql/author_posts')
        ]
      });

      await this.apolloServer.start();

      const app = this.app;
      this.apolloServer.applyMiddleware({app});
    }

    /**
     * Runs the app
     */
    run() {
      this.app.listen(this.configs.port, () => {
        if (process.env.NODE_ENV !== 'production' &&
            process.env.NODE_ENV !== 'development' &&
            process.env.NODE_ENV !== 'testing'
        ) {
          console.error(`NODE_ENV is set to ${process.env.NODE_ENV}, but only production, testing and development are valid.`);
          process.exit(1);
        } else {
          console.log("Express server running project on port " + this.configs.port + ".")
        }
      })
    }
}

//Runs the thing
const app = new App();

app.ApolloServer;
app.run();
app.applyGraphQLMiddleware();






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


