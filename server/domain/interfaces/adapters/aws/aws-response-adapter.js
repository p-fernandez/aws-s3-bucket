'use strict';

const awsResponseAdapter = (response) => {
  const {
    Contents: files = [],
    Name: bucketName,
  } = response;

  return {
    bucketName,
    files,
  };
};

module.exports = awsResponseAdapter;
