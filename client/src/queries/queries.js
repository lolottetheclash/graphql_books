import { gql } from '@apollo/client';

const getBooksQuery = gql`
  query GetBooks {
    books {
      id
      name
      genre
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

const getSingleBookQuery = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, getSingleBookQuery, addBookMutation };
