const {microGraphiql, microGraphql} = require('graphql-server-micro');
const { send } = require('micro');
const {get, post, router} = require('microrouter');

const schema = require('./schema');

const graphqlHandler = microGraphql({schema});
const graphiqlHandler = microGraphiql({endpointURL: '/graphql'});

module.exports = router(
  get('/graphiql', graphiqlHandler),
  get('/graphql', graphqlHandler),
  post('/graphql', graphqlHandler),
  (req, res) => send(res, 404, 'not found'),
);
