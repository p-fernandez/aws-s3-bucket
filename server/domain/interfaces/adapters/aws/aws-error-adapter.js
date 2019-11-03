'use strict';

const {
  BadGatewayError,
  NotFoundError,
  InternalServerError,
} = require('../../errors');

const RESOURCE = 'AWS Bucket';

const awsErrors = {
  CredentialsError: BadGatewayError,
  NoSuchBucket: BadGatewayError,
  NoSuchKey: NotFoundError,
  InvalidAccessKeyId: BadGatewayError,
  MissingRequiredParameter: BadGatewayError,
  SignatureDoesNotMatch: BadGatewayError,
  UnexpectedParameter: BadGatewayError,
  UnknownEndpoint: BadGatewayError,
};

const awsErrorAdapter = (err) => {
  const {
    code,
    message,
  } = err;

  const ReceivedError = awsErrors[code];

  if (!ReceivedError) {
    return new InternalServerError(message, RESOURCE);
  }

  return new ReceivedError(message, RESOURCE);
};

module.exports = awsErrorAdapter;
