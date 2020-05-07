import { QueryResolvers } from '../generated';
import { ApiRequestInterface } from '../middlewares/withDatabase';

const me: QueryResolvers['me'] = async (_: any, __: any, { req }: { req: ApiRequestInterface }) => {
  return req.db.collection('users').findOne({ email: 'email@email.com' });
};

const user = {
  Query: {
    me,
  },

  Mutation: {},

  User: {
    id: (root: any) => {
      return root._id;
    },
  },
};

export default user;
