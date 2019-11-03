'use strict';

const badGatewayError = require('./bad-gateway-error');
const badRequestError = require('./bad-request-error');
const internalServerError = require('./internal-server-error');
const methodNotAllowedError = require('./method-not-allowed-error');
const notFoundError = require('./not-found-error');
const unauthorizedError = require('./unauthorized-error');

module.exports = {
  badGatewayError,
  badRequestError,
  internalServerError,
  methodNotAllowedError,
  notFoundError,
  unauthorizedError,
};
