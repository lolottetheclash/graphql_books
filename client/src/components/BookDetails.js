import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getSingleBookQuery } from '../queries/queries';

export default function BookDetails() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(getSingleBookQuery, {
    variables: { id },
  });
  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error here: {error.message}</p>;
  console.log(data);
  const { book } = data;

  return <div>bookDetails {book.name}</div>;
}
