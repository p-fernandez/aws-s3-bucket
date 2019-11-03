'use strict';

const BadGatewayError = require('./bad-gateway-error');
const BadRequestError = require('./bad-request-error');
const InternalServerError = require('./internal-server-error');
const NotFoundError = require('./not-found-error');
const UnauthorizedError = require('./unauthorized-error');

module.exports = {
  BadGatewayError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
};
