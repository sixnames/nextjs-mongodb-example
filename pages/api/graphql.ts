import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../api/typeDefs';
import resolvers from '../../api/resolvers';
import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars';
import withMiddleware from '../../api/middlewares/middleware';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    ...resolvers,
    DateTime: DateTimeResolver,
    JSONObject: JSONObjectResolver,
  },
  context: ({ req, res, connection }) => (connection ? connection.context : { req, res }),
  playground:
    process.env.NODE_ENV === 'production'
      ? false
      : {
          settings: {
            'request.credentials': 'include',
          },
        },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default withMiddleware(apolloServer.createHandler({ path: '/api/graphql' }));
