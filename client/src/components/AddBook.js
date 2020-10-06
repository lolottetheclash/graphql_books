import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';

export default function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error here : {error.message}</p>;
  const { authors } = data;
  console.log(authors);


  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name:</label>
        <input type="text"></input>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text"></input>
      </div>
      <div className="field">
        <label>Select Author:</label>
        <select name="author">
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
