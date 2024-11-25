/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { favoritoRouter } from './routes/favorito.router';
import { json } from 'body-parser';
import { authRouter } from './routes/auth.router';

MongoClient.connect('mongodb://node-mongodb-container_devcontainer-db-1/',).then((client: MongoClient) => {
  app.locals.db = client.db('app-favoritos');
  console.log('Conectado ao MongoDB');}).catch(err => {
    console.error(err);
  })


const app = express();

app.use(cors());

app.use(json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/auth', authRouter);

app.use('/api/favorito', favoritoRouter);



app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
