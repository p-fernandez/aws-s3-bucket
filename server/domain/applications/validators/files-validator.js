'use strict';

const Joi = require('@hapi/joi');

const BadRequestError = require('../../interfaces/errors/bad-request-error');

const RESOURCE = 'files-validator';

// https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html
const regex = /^[ a-zA-Z0-9!\-_,.*'()]+$/;
const schemaId = Joi.object({
  id: Joi.string().regex(regex).required(),
});

const schemaWithLink = Joi.object({
  withLink: Joi.boolean().invalid(false),
});

const errorThrower = (error) => {
  if (error) {
    const { message } = error;
    throw new BadRequestError(message, RESOURCE);
  }
};

const validateId = (id) => {
  const { error } = schemaId.validate({ id });
  errorThrower(error);
};

const validateWithLink = (withLink) => {
  const { error } = schemaWithLink.validate({ withLink });
  errorThrower(error);
};

module.exports = {
  validateId,
  validateWithLink,
};
