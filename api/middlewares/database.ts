import { Db, MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export interface ApiRequestInterface extends NextApiRequest {
  db?: Db;
  dbClient?: MongoClient;
}

export type ApiNextFunc = (args?: any) => void | any;

const client = new MongoClient(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDb(db: Db) {
  await db.collection('tokens').createIndex('expireAt', { expireAfterSeconds: 0 });
}

export default async function database(
  req: ApiRequestInterface,
  _: NextApiResponse,
  next: ApiNextFunc,
) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  await setUpDb(req.db);
  return next();
}
