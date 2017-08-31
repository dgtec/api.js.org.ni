const bcrypt = require('bcrypt');
const { GraphQLNonNull, GraphQLString } = require('graphql');
const { mutationWithClientMutationId } = require('graphql-relay');

const { User } = require('../models');
const { GraphQLUser } = require('../types/user');

const CreateUserMutation = mutationWithClientMutationId({
  description: 'Creates a new user.',
  name: 'CreateUser',
  inputFields: {
    email: {
      description: 'The user\'s email.',
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      description: 'The user\'s password.',
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      description: 'The username used to login.',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    user: {
      description: 'The new user.',
      type: new GraphQLNonNull(GraphQLUser),
      resolve: user => user
    }
  },
  mutateAndGetPayload: async ({ email, password, username }) => {
    if (password.trim() === '') {
      throw new Error('Password is required');
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hash
    });

    return user;
  }
});

module.exports = CreateUserMutation;
