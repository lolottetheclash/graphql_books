import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';

export default function AddBook() {
  const [newBook, setNewBook] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [addNewBook] = useMutation(addBookMutation, {
    variables: {
      name: newBook.name,
      genre: newBook.genre,
      authorId: newBook.authorId,
    },
    refetchQueries: [{ query: getBooksQuery }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error here : {error.message}</p>;
  const { authors } = data;

  const updateBookInfos = e => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = e => {
    e.preventDefault();
    addNewBook();
    setNewBook({ name: '', genre: '', authorId: '' });
  };

  return (
    <form id="add-book" onSubmit={addBook}>
      <div className="field">
        <label>Book Name:</label>
        <input type="text" name="name" onChange={updateBookInfos}></input>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={updateBookInfos}></input>
      </div>
      <div className="field">
        <label>Select Author:</label>
        <select name="authorId" onChange={updateBookInfos}>
          <option value="">Please select an author</option>
          {authors.map(author => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
