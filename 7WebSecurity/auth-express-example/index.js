const dotenv = require("dotenv");
const express = require('express');
const bodyParser = require('body-parser');  // enables accessing the payload of http post requests
const cors = require('cors');
const jwtMiddleware = require('express-jwt'); // middleware to verify routes with jwt
const cookieParser = require('cookie-parser');
const DB = require('./database');
const { ApolloServer } = require('apollo-server-express')
dotenv.config();

class App{
  /**
     * 
     * 
     * Sets the properties to be used by this class to create the server
     * 
     */
    constructor() {
      this.app = express();
      this.apolloServer;
      this.db = DB;

      //Literal object containing the configurations
      this.configs = {
          get port() {
              return process.env.PORT || 3000
          },
          
          get secret(){
              return process.env.SECRET_TOKEN
          }
      }
    }

    /**
     * 
     * 
     * Applies any middleware to be used by this app
     * 
     */
    applyMiddleware() {
      // For each request, provide wildcard Access-Control-* headers via OPTIONS call
      this.app.use(cors()); 
      // For each request, parse request body into a JavaScript object where header Content-Type is application/json
      this.app.use(bodyParser.json());
      // For each request, parse cookies
      this.app.use(cookieParser());

      this.app.use(require('./routes'));

      this.applyAuthorizationMiddleware();
    }

    applyGraphQLMiddleware(){
      // create new apollo server and add graphql types and queries
      this.apolloServer = new ApolloServer({
        modules: [
          require('./graphql/authors'),
          require('./graphql/author_posts')
        ]
      });

      const app = this.app;
      this.apolloServer.applyMiddleware({app});

    }

    applyAuthorizationMiddleware(){
      // Secure "protected" endpoints with JWT middleware
      this.app.use('/api', jwtMiddleware({
        secret: this.configs.secret,  // Use the same token that we used to sign the JWT above
        algorithms: ['HS256'], // HMAC with SHA-256
        // Let's allow our clients to provide the token in a variety of ways
        getToken: function (req) {
          if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer 
            // Handle token presented as a Bearer token in the Authorization header
            return req.headers.authorization.split(' ')[1];
          } else if (req.query && req.query.token) {
            // Handle token presented as URI param
            return req.query.token;
          } else if (req.cookies && req.cookies.token) {
            // Handle token presented as a cookie parameter
            return req.cookies.token;
          }
          // If we return null, we couldn't find a token.
          // In this case, the JWT middleware will return a 401 (unauthorized) to the client for this request
          return null; 
        }
      }));
    }

    initRESTEndpoints(){
      const DB = this.db;

      // can be accessed without authorization
      this.app.get('/authors', function(req, res) {
        DB.authors.findAll().then(authors => res.json(authors));
      });

      this.app.post('/posts', function(req, res) {
        const id = 1;

        DB.posts.findAll({
          where: {
            author_id: id
          }
        })
        .then(posts => res.json(posts));
      });

      this.app.post('/followers', function(req, res) {
        const author_id = 1;

        DB.followers.findAll({
          where: {
            author_followed_id: author_id
          }
        }).then(followers => res.json(followers));
      });
    }

    /**
     * 
     * 
     * Runs the app
     * 
     */
    run() {
      this.app.listen(this.configs.port, () => {
          console.log("Express server running project on port " + this.configs.port + ".")
      })
    }
}

//Runs the thing
const app = new App();

app.ApolloServer
app.applyMiddleware();
app.applyGraphQLMiddleware();
app.initRESTEndpoints();
app.run();

