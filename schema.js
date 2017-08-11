const {
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql');
const {
	fromGlobalId,
	nodeDefinitions
} = require('graphql-relay');

const {nodeField, nodeInterface} = nodeDefinitions(
	globalId => {
		const {id, type} = fromGlobalId(globalId);

		return null;
	},
	obj => {
		return null;
	}
);

const Query = new GraphQLObjectType({
	description: 'The query root of JSNI\'s GraphQL interface.',
	name: 'Query',
	fields: {
		node: nodeField
	}
});

module.exports = new GraphQLSchema({
	query: Query
});
