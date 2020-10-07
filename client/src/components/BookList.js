import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { getBooksQuery } from '../queries/queries';

export default function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error here: {error.message}</p>;
  const { books } = data;

  return (
    <div>
      <ul id="book-list">
        {books.map(book => {
          return (
            <li key={book.id}>
              <p>
                {book.name}
                <button
                  style={{
                    marginLeft: 10,
                    background: '#880e4f',
                    borderRadius: 5,
                  }}
                >
                  <Link
                    to={`/details/${book.id}`}
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    +
                  </Link>
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
