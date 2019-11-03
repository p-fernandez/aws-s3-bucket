'use strict';

const filesExternalRepository = require('../../repositories/external/files-external-repository');
const {
  validateId,
} = require('../../applications/validators/files-validator');

const execute = async(id) => {
  validateId(id);

  return filesExternalRepository.fetchDownloadLink(id);
};

module.exports = execute;
