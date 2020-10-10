import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query GET_ME($username: String) {
    me {
        _id
        username
        email
        bookCount
        savedBooks
    }
  }
`;