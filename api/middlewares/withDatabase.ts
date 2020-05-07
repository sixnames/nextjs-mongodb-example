import { NextHandleFunction } from 'connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextFunction } from 'express';
import { Db, MongoClient } from 'mongodb';

export interface ApiRequestInterface extends NextApiRequest {
  db: Db;
  dbClient?: MongoClient;
}

const client = new MongoClient(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDb(db: Db) {
  await db.collection('tokens').createIndex('expireAt', { expireAfterSeconds: 0 });
}

const withDatabase = (handler: NextHandleFunction) => async (
  req: ApiRequestInterface,
  res: NextApiResponse,
  next: NextFunction,
) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  await setUpDb(req.db);

  return handler(req, res, next);
};
export default withDatabase;
