'use strict';

const awsFileAdapter = (awsFile) => {
  const {
    ContentLength: contentLength,
    ContentType: contentType,
    ETag: eTag,
    Key: id,
    LastModified: lastModified,
    Link: link,
    Metadata: metadata,
    Size: fileSize,
  } = awsFile;

  const size = contentLength || fileSize;

  return {
    id,
    ...(link && { link }),
    ...(contentType && { contentType }),
    ...(size && { size }),
    ...(eTag && { eTag }),
    ...(lastModified && { lastModified }),
    ...(metadata && Object.keys(metadata).length > 0 && { metadata }),
  };
};

module.exports = awsFileAdapter;
