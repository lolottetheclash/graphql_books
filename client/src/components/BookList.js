import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

export default function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error here: {error.message}</p>;
  console.log(data);
  const { books } = data;

  return (
    <div>
      <ul id="book-list">
        {books.map(book => {
          return (
            <li key={book.id}>
              <p>{book.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
