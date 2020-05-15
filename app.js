import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const app = express();

import models from './models';
import typeDefs from './typedefs';
import resolvers from './resolvers';

// const me = models.users[0];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models
    // me
  }
});

server.applyMiddleware({ app });

app.listen(3000, () => console.info('Runing Apollo'));
