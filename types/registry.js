const { fromGlobalId } = require('graphql-relay');

const TYPE_REGISTRY = {};

function registerType(type, resolveById) {
  TYPE_REGISTRY[type.name] = {
    resolveById,
    type
  };

  return type;
}

async function idFetcher(globalId, info) {
  const { type, id } = fromGlobalId(globalId);

  if (!TYPE_REGISTRY[type]) {
    return null;
  }

  const { resolveById } = TYPE_REGISTRY[type];
  const item = await resolveById(id, info);

  // We set the item type
  // so we can resolve it later in `typeResolver`.
  item.type = type;

  return item;
}

function typeResolver(obj) {
  return TYPE_REGISTRY[obj.type].type;
}

module.exports = {
  idFetcher,
  registerType,
  typeResolver
};
