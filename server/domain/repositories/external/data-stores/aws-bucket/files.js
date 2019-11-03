'use strict';

const {
  s3,
  bucketParams,
} = require('./config');

const awsErrorAdapter = require('../../../../interfaces/adapters/aws/aws-error-adapter');
const awsFileAdapter = require('../../../../interfaces/adapters/aws/aws-file-adapter');
const awsResponseAdapter = require('../../../../interfaces/adapters/aws/aws-response-adapter');


const fetchAll = async() => {
  try {
    const data = await s3.listObjects(bucketParams).promise();

    const {
      files,
    } = awsResponseAdapter(data);

    return files.map(awsFileAdapter);
  } catch (err) {
    throw awsErrorAdapter(err);
  }
};

const fetchOne = async(id) => {
  try {
    const data = await s3.getObject({
      ...bucketParams,
      Key: id,
    }).promise();

    const composedData = {
      Key: id,
      ...data,
    };

    return awsFileAdapter(composedData);
  } catch (err) {
    throw awsErrorAdapter(err);
  }
};

const fetchDownloadLink = async(id) => {
  try {
    const data = await s3.getSignedUrlPromise('getObject', {
      ...bucketParams,
      Key: id,
      ResponseContentType: 'application/octet-stream',
    });

    const composedData = {
      Key: id,
      Link: data,
    };

    return awsFileAdapter(composedData);
  } catch (err) {
    throw awsErrorAdapter(err);
  }
};

module.exports = {
  fetchAll,
  fetchDownloadLink,
  fetchOne,
};
