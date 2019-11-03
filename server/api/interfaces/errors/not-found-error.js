'use strict';

const apiErrorAdapter = require('../adapters/api-error-adapter');

const STATUS_CODE = 404;
const NAME = 'Not found';

const badRequestError = (
  resource,
  detail,
  data
) => apiErrorAdapter(STATUS_CODE, NAME, resource, detail, data);

module.exports = badRequestError;
