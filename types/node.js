const { nodeDefinitions } = require('graphql-relay');

const { idFetcher, typeResolver } = require('./registry');

const { nodeField, nodeInterface } = nodeDefinitions(
  idFetcher, typeResolver
);

module.exports = {
  nodeField,
  nodeInterface
};
