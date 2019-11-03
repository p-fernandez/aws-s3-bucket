'use strict';

const {
  errorResponseAdapter,
} = require('../interfaces/adapters');
const {
  badRequestError,
  methodNotAllowedError,
} = require('../interfaces/errors');

const RESOURCE = 'middleware';
const allowedMethods = ['GET'];

function blockUnusedMethods(app) {
  app.use((req, res, next) => {
    if (!allowedMethods.includes(req.method)) {
      return errorResponseAdapter(res, methodNotAllowedError(RESOURCE, `Methods allowed are: ${allowedMethods}`));
    }

    return next();
  });
}

/**
 * If body parser fails, this middleware will be executed
 * @param {err} Object containing raw body, status and statusCode
 */
function bodyParserFailure(app) {
  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      const {
        message,
      } = err;
      return errorResponseAdapter(res, badRequestError(RESOURCE, message));
    }

    return next();
  });
}

const preRoutesMiddlewares = (app) => {
  blockUnusedMethods(app);
  bodyParserFailure(app);
};

module.exports = preRoutesMiddlewares;
