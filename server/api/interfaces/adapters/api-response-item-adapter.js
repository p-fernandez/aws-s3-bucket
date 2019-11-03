'use strict';

const createApiResponseItem = (type, id, attributes, link = null) => ({
  type,
  id,
  ...(attributes && Object.keys(attributes).length > 0 && { attributes }),
  ...(link && {
    link: {
      self: link,
    },
  }),
});

module.exports = createApiResponseItem;
