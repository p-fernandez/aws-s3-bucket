'use strict';

const filesRouter = require('./files-router');

const ROUTE_CONTEXT = '/api';

const routes = (app) => {
  app.use(`${ROUTE_CONTEXT}/files`, filesRouter);
};

module.exports = routes;
