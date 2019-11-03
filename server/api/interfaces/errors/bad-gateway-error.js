'use strict';

const apiErrorAdapter = require('../adapters/api-error-adapter');

const STATUS_CODE = 502;
const NAME = 'Bad gateway';

const badGatewayError = (
  resource,
  detail,
  data
) => apiErrorAdapter(STATUS_CODE, NAME, resource, detail, data);

module.exports = badGatewayError;
