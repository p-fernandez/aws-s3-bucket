'use strict';

const AWS = require('aws-sdk');

const config = require('../../../../../config');

const awsConfig = {
  region: config.get('aws:region'),
  credentials: {
    accessKeyId: config.get('aws:accessKeyId'),
    secretAccessKey: config.get('aws:secretAccessKey'),
  },
};

const s3 = new AWS.S3(awsConfig);

const bucketParams = {
  Bucket: config.get('aws:bucketName'),
};

module.exports = {
  s3,
  bucketParams,
};
