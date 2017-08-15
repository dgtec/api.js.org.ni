const {GraphQLObjectType, GraphQLSchema} = require('graphql');

const CreateUserMutation = require('./mutations/create-user');

const {nodeField} = require('./types/node');
const {GraphQLUser} = require('./types/user');

const Query = new GraphQLObjectType({
  description: 'The query root of JSNI\'s GraphQL interface.',
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: {
      type: GraphQLUser,
      resolve: (_, args, request) => request.user
    }
  }
});

const Mutation = new GraphQLObjectType({
  description: 'The root query for implementing GraphQL mutations.',
  name: 'Mutation',
  fields: {
    createUser: CreateUserMutation
  }
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
  query: Query
});
