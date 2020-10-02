const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const schema = require('./schema/schema');

// Loading Environment Vars
dotenv.config({ path: '.env' });

const app = express();


app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
