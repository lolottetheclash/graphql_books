import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';

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
    <form
      id="add-book"
      onSubmit={addBook}
      style={{ marginTop: 50, marginLeft: 10, width: 600, display: 'flex' }}
    >
      <div className="field">
        <InputLabel>Book Title</InputLabel>
        <TextField
          type="text"
          name="name"
          onChange={updateBookInfos}
        ></TextField>
      </div>
      <div className="field" style={{ marginLeft: 40, marginRight: 40 }}>
        <InputLabel>Genre</InputLabel>

        <TextField
          type="text"
          name="genre"
          onChange={updateBookInfos}
        ></TextField>
      </div>
      <div className="field" style={{ marginRight: 40 }}>
        <InputLabel>Author</InputLabel>
        <Select
          name="authorId"
          onChange={updateBookInfos}
          style={{ width: 150 }}
        >
          {authors.map(author => {
            return (
              <MenuItem key={author.id} value={author.id}>
                {author.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>

      <Button
        type="submit"
        color="primary"
        variant="outlined"
        size="large"
        style={{ marginLeft: -20, marginRight: -20 }}
        disabled={
          (newBook.name === '') |
          (newBook.genre === '') |
          (newBook.authorId === '')
            ? true
            : false
        }
      >
        <SaveIcon style={{ marginRight: 5 }} />
        <Typography style={{ whiteSpace: 'nowrap' }}>Add Book</Typography>
      </Button>
    </form>
  );
}
