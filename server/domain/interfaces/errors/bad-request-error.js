'use strict';

class BadRequestError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'BadRequestError';
    this.message = message || 'Bad request error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
