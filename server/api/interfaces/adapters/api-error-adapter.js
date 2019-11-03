'use strict';

const jsonApiError = require('./json-api-error-adapter');

const createApiError = (statusCode, name, resource = '', detail = '', data = null) => ({
  statusCode,
  error: jsonApiError(
    statusCode,
    name,
    { pointer: resource },
    detail,
    data
  ),
});

module.exports = createApiError;
