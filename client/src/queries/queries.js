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
export { getBooksQuery, getAuthorsQuery };
