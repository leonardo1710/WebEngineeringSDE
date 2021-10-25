
const db = require('../database/database')
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    extend type Query {
        authors: [Author]
        author(id: ID!): Author
    }
    type Author {
        id: ID!
        firstname: String
        lastname: String
        birthday: String
    }
`

const resolvers = {
    Query: {
        authors: async () => db.authors.findAll(),
        author: async (obj, args, context, info) =>
            db.authors.findByPk(args.id),
    }
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};