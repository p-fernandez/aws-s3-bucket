'use strict';

const filesEntity = require('../../entities/files-entity');
const {
  validateWithLink,
} = require('../../applications/validators/files-validator');

const execute = async(withLink) => {
  validateWithLink(withLink);

  return filesEntity.fetchAll(withLink);
};

module.exports = execute;
