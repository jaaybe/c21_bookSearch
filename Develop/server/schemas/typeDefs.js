// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  type Input {
    authors: [String]!
    description: String!
    title: String!
    bookId: String!
    image: String!
    link: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  
    removeBook(bookId: String!): User
  }
  
  type Auth {
    token: ID!
    user: User
  }


`;

// export the typeDefs
module.exports = typeDefs;


// saveBook(input: Input): User