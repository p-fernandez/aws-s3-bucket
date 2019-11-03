'use strict';

const filesAwsBucket = require('./data-stores/aws-bucket/files');

const fetchAll = async() => filesAwsBucket.fetchAll();

const fetchDownloadLink = async(id) => filesAwsBucket.fetchDownloadLink(id);

const fetchOne = async(id, includeLink) => filesAwsBucket.fetchOne(id, includeLink);

module.exports = {
  fetchAll,
  fetchDownloadLink,
  fetchOne,
};
