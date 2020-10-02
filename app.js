const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const schema = require('./schema/schema');

// Loading Environment Vars
dotenv.config({ path: '.env' });

const app = express();

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDb connected: ${conn.connection.host}`);
};

// connect to database
connectDb();


app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
