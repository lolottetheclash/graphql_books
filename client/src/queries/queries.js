import { gql } from '@apollo/client';

const getBooksQuery = gql`
  query GetBooks {
    books {
      id
      name
      author {
        name
      }
    }
  }
`;
const getAuthorsQuery = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`;

export { getBooksQuery, getAuthorsQuery };
