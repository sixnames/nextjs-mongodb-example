import { session, promisifyStore, Store, MemoryStore } from 'next-session';
import { ApiNextFunc, ApiRequestInterface } from './database';
import { NextApiResponse } from 'next';

// const MongoStore = connectMongo({ Store, MemoryStore });
// import connectMongo from 'connect-mongo';

const MongoStore = require('connect-mongo')({ Store, MemoryStore });

export default function (req: ApiRequestInterface, res: NextApiResponse, next: ApiNextFunc) {
  const mongoStore = new MongoStore({
    client: req.dbClient, // see how we use req.dbClient from the previous step
    stringify: false,
  });
  return session({
    store: promisifyStore(mongoStore),
  })(req, res, next);
}
