const {fromGlobalId, nodeDefinitions} = require('graphql-relay');

const {nodeField, nodeInterface} = nodeDefinitions(
  globalId => {
    const {id, type} = fromGlobalId(globalId);

    return null;
  },
  obj => {
    return null;
  }
);

module.exports = {
  nodeField,
  nodeInterface
};
