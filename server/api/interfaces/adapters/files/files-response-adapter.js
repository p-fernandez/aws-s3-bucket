'use strict';

/**
 * This looks overkill but with a factory pattern this would a single function
 * to apply the appropriate adapter to any desired entity
 * EntityAdapter = (entities) => apiResponse(entities.map(entityAdapter))
 */
const fileResponseAdapter = require('./file-response-adapter');

const apiResponse = require('../api-response-adapter');

const filesResponseAdapter = (files) => apiResponse(files.map(fileResponseAdapter));

module.exports = filesResponseAdapter;
