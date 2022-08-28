
const db = require('../database/database');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    extend type Query {
        posts: [Post]
        post(id: ID!): Post
    }
    type Post {
        id: ID!
        title: String
        content: String
        author: Author
    }
`

const resolvers = {
    Query: {
        posts: async () => db.posts.findAll(),
        post: async (obj, args, context, info) =>
            db.posts.findByPk(args.id),
    },
    Post: {
      author: async (obj, args, context, info) => {
        return db.authors.findByPk(obj.author_id)
      }
      
        
    }
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};