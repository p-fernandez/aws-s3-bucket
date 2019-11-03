'use strict';

const {
  fetchAllCommand,
  fetchDownloadLinkCommand,
  fetchOneCommand,
} = require('../../domain/use-cases/files');
const {
  domainErrorAdapter,
  errorResponseAdapter,
} = require('../interfaces/adapters');
const fileResponseAdapter = require('../interfaces/adapters/files/file-response-adapter');
const filesResponseAdapter = require('../interfaces/adapters/files/files-response-adapter');

async function fetchAll(req, res) {
  try {
    const {
      query: {
        withLink,
      },
    } = req;

    const responseData = await fetchAllCommand(withLink);

    return res.status(200).json(filesResponseAdapter(responseData));
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

async function fetchDownloadLink(req, res) {
  try {
    const {
      params: {
        fileId,
      },
    } = req;

    const responseData = await fetchDownloadLinkCommand(req.sanitize(fileId));

    return res.status(200).json(fileResponseAdapter(responseData));
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

async function fetchOne(req, res) {
  try {
    const {
      params: {
        fileId,
      },
      query: {
        withLink,
      },
    } = req;

    const responseData = await fetchOneCommand(req.sanitize(fileId), withLink);

    return res.status(200).json(fileResponseAdapter(responseData));
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

module.exports = {
  fetchAll,
  fetchDownloadLink,
  fetchOne,
};
