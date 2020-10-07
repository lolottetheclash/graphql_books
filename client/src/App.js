import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/">
            <div id="main">
              <h1>Ninja's Reading List</h1>
              <BookList />
              <AddBook />
            </div>
          </Route>
          <Route exact path="/details/:id">
            <BookDetails />
          </Route>
          <Redirect to="/" />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
