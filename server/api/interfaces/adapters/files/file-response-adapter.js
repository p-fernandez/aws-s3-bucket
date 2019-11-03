'use strict';

const apiResponseItem = require('../api-response-item-adapter');

const ENTITY = 'files';

const fileResponseAdapter = (file) => {
  const {
    id,
    link = null,
    ...attributes
  } = file;

  return apiResponseItem(ENTITY, id, attributes, link);
};

module.exports = fileResponseAdapter;
