'use strict';

const filesEntity = require('../../entities/files-entity');
const {
  validateId,
  validateWithLink,
} = require('../../applications/validators/files-validator');

const execute = async(id, withLink) => {
  validateId(id);
  validateWithLink(withLink);

  return filesEntity.fetchOne(id, withLink);
};

module.exports = execute;
