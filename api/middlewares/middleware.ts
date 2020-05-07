import withDatabase from './withDatabase';
import { NextHandleFunction } from 'connect';
// import withSession from './withSession';

// const middleware = (handler: NextHandleFunction) => withDatabase(withSession(handler));
const middleware = (handler: NextHandleFunction) => withDatabase(handler);

export default middleware;
