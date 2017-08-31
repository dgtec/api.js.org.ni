const { GraphQLObjectType, GraphQLString } = require('graphql');
const { globalIdField } = require('graphql-relay');

const { User } = require('../models');

const { nodeInterface } = require('./node');
const { registerType } = require('./registry');

const GraphQLUser = registerType(
  new GraphQLObjectType({
    description: 'A user is an individual\'s account on JSNI.',
    name: 'User',
    fields: {
      id: globalIdField(),
      email: {
        description: 'The user\'s email.',
        type: GraphQLString
      },
      username: {
        description: 'The user\'s username.',
        type: GraphQLString
      }
    },
    interfaces: [nodeInterface]
  }),
  id => {
    return User.findById(id);
  }
);

module.exports = {
  GraphQLUser
};
