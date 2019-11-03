'use strict';

const fs = require('fs');
const nconf = require('nconf');
const path = require('path');

const configFilePath = path.join(__dirname, 'config.json');

if (!fs.existsSync(configFilePath)) {
  console.error('Missing mandatory config file at <ROOT>/server/config/config.json');
  process.exit();
}

try {
  nconf.file(configFilePath);
} catch (error) {
  const { message } = error;
  console.error(`${message}. Probably this is a malformed JSON file.`);
  process.exit();
}

try {
  nconf.required(['aws:accessKeyId', 'aws:bucketName', 'aws:secretAccessKey', 'aws:region']);
} catch (error) {
  const { message } = error;
  console.error(message);
  process.exit();
}

module.exports = nconf;
