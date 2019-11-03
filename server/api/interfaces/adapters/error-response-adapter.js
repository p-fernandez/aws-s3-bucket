'use strict';

const jsonApi = {
  version: '1.0',
};

const errorResponseAdapter = (res, apiError) => {
  const {
    statusCode,
    error,
  } = apiError;

  return res.status(statusCode).send({
    jsonApi,
    errors: [
      error,
    ],
  });
};

module.exports = errorResponseAdapter;
