'use strict';

class InternalServerError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'InternalServerError';
    this.message = message || 'Unexpected error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = 500;
  }
}

module.exports = InternalServerError;
