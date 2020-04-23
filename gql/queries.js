import gql from 'graphql-tag';

export const POSTS = gql`
  query {
    posts{
      docs{
        _id
        title
      }
    }
  }
`;