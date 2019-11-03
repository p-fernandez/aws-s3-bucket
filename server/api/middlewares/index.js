'use strict';

const preRoutesMiddlewares = require('./pre-routes-middlewares');
const postRoutesMiddlewares = require('./post-routes-middlewares');

const middlewares = {
  preRoutesMiddlewares,
  postRoutesMiddlewares,
};

module.exports = middlewares;
