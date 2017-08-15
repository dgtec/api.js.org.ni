const {GraphQLObjectType, GraphQLString} = require('graphql');
const {globalIdField} = require('graphql-relay');

const {nodeInterface} = require('./node');

const GraphQLUser = new GraphQLObjectType({
  description: 'A user is an individual\'s account on JSNI.',
  name: 'User',
  fields: {
    id: globalIdField(),
    email: {
      description: 'The user\'s email.',
      type: GraphQLString
    }
  },
  interfaces: [nodeInterface]
});

module.exports = {
  GraphQLUser
};
