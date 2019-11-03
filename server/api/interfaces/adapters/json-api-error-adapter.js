'use strict';

/**
 * Error following the structure of JSON-API standards to be used
 * to carry out all the data of any controlled error from the application.
 * https://jsonapi.org/
 *
 * @params {String} statusCode Error status code
 * @params {String} name Basic message of the error
 * @params {String} source Source that originates the error
 * @params {String} detail Extra information of the error such their message.
 * @params {Object} data Extra attributes needed for some errors
 * This can be a JSON string of Janrain network errors.
 * @return {Object}
 */
const createJsonApiError = (statusCode, name, source = null, detail = null, data = null) => ({
  statusCode,
  name,
  ...(source && { source }),
  ...(detail && { detail }),
  ...(data && { data }),
});

module.exports = createJsonApiError;
