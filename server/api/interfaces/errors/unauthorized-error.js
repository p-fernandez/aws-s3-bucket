'use strict';

const apiErrorAdapter = require('../adapters/api-error-adapter');

const STATUS_CODE = 401;
const NAME = 'Unauthorized';

const unauthorizedError = (
  resource,
  detail,
  data
) => apiErrorAdapter(STATUS_CODE, NAME, resource, detail, data);

module.exports = unauthorizedError;
