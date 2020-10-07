import React from 'react';
import { useQuery } from '@apollo/client';
import LoupeIcon from '@material-ui/icons/Loupe';
import { getBooksQuery } from '../queries/queries';
import MyBook from '../images/book.jpeg';

import {
  Card,
  CardContent,
  Grid,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/';

export default function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error here: {error.message}</p>;
  const { books } = data;

  return (
    <Grid
      container
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 100,
      }}
    >
      {books.map(book => {
        return (
          <Grid item xs={12} sm={4} md={4} lg={3} key={book.id}>
            <Card
              style={{
                width: 200,
                margin: 10,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia style={{ height: 100 }} image={MyBook} />
              <CardContent>
                <Typography style={{ height: 15, marginBottom: 15 }}>
                  {book.name}
                </Typography>
              </CardContent>
              <Button
                href={`/details/${book.id}`}
                style={{
                  alignSelf: 'flex-end',
                  marginLeft: 10,
                  background: '#880e4f',
                  borderRadius: 5,
                  color: '#fff',
                }}
              >
                <LoupeIcon />
              </Button>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
