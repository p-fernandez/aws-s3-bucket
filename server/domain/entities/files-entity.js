'use strict';

const filesExternalRepository = require('../repositories/external/files-external-repository');

const addLinkToFile = async(file) => {
  try {
    const {
      id,
    } = file;

    const { link } = await filesExternalRepository.fetchDownloadLink(id);

    return {
      ...file,
      link,
    };
  } catch (error) {
    // TO-DO: Implement proper logger. This is going to be silented because
    // it can be used by other flows and we don't want to break them by
    // short network errors or wrong information.
    // console.log(error);
    return file;
  }
};

const fetchAll = async(withLink) => {
  let files = await filesExternalRepository.fetchAll();

  if (withLink) {
    const promises = files.map(addLinkToFile);
    files = await Promise.all(promises);
  }

  return files;
};

const fetchOne = async(id, withLink) => {
  let file = await filesExternalRepository.fetchOne(id);

  if (withLink) {
    file = addLinkToFile(file);
  }

  return file;
};

module.exports = {
  fetchAll,
  fetchOne,
};
