'use strict';

const apiErrorAdapter = require('../adapters/api-error-adapter');

const STATUS_CODE = 500;
const NAME = 'Internal server error';

const internalServerError = (
  resource,
  detail,
  data
) => apiErrorAdapter(STATUS_CODE, NAME, resource, detail, data);

module.exports = internalServerError;
