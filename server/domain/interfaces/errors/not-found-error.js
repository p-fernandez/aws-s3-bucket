'use strict';

class NotFoundError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'NotFoundError';
    this.message = message || 'Not found error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
