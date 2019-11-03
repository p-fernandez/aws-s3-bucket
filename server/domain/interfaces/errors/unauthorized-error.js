'use strict';

class UnauthorizedError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'UnauthorizedError';
    this.message = message || 'Unauthorized error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
