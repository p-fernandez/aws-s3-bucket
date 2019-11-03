'use strict';

const apiErrorAdapter = require('./api-error-adapter');
const domainErrorAdapter = require('./domain-error-adapter');
const errorResponseAdapter = require('./error-response-adapter');
const jsonApiErrorAdapter = require('./json-api-error-adapter');

module.exports = {
  apiErrorAdapter,
  domainErrorAdapter,
  errorResponseAdapter,
  jsonApiErrorAdapter,
};
