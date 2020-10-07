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

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;
