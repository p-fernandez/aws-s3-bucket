'use strict';

const {
  errorResponseAdapter,
} = require('../interfaces/adapters');
const {
  internalServerError,
  notFoundError,
} = require('../interfaces/errors');

const INTERNAL_SERVER_ERROR = 'Internal server error';
const NOT_FOUND_ERROR = 'Unknown resource';
const RESOURCE = 'middleware';

/**
 * Special middleware to catch sync unhandled errors
 */
const unhandledErrorsCatcher = (app) => {
  app.use((err, req, res, next) => {
    const { message = INTERNAL_SERVER_ERROR } = err;
    errorResponseAdapter(res, internalServerError(RESOURCE, message));
  });
};

const unknownResource = (app) => {
  app.use('/', (req, res) => {
    errorResponseAdapter(res, notFoundError(RESOURCE, NOT_FOUND_ERROR));
  });
};

const postRoutesMiddlewares = (app) => {
  unknownResource(app);
  unhandledErrorsCatcher(app);
};

module.exports = postRoutesMiddlewares;
