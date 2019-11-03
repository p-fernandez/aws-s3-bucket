'use strict';

class BadGatewayError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'BadGatewayError';
    this.message = message || 'Bad gateway error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = 502;
  }
}

module.exports = BadGatewayError;
