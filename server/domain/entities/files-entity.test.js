'use strict';

const {
  fetchAll,
  fetchOne,
} = require('./files-entity');

const filesExternalRepository = require('../repositories/external/files-external-repository');

const fileExpected = {
  id: expect.any(String),
  eTag: expect.any(String),
  lastModified: expect.any(Date),
  size: expect.any(Number),
};

describe('Integration: files-entity', () => {
  describe('fetchAll with link', () => {
    test('should return all files with their link', async() => {
      const res = await fetchAll(true);
      if (res.length > 0) {
        expect(res).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              ...fileExpected,
              link: expect.any(String),
            }),
          ])
        );
      } else {
        expect(res).toEqual([]);
      }
    });

    test('should return original files if retrieval of link fails', async() => {
      filesExternalRepository.fetchDownloadLink = jest.fn().mockRejectedValue(new Error('Mock'));

      const res = await fetchAll(true);
      if (res.length > 0) {
        expect(res).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              ...fileExpected,
            }),
          ])
        );
        expect(res).toEqual(
          expect.arrayContaining([
            expect.not.objectContaining({
              link: expect.any(String),
            }),
          ])
        );
      } else {
        expect(res).toEqual([]);
      }
    });
  });
});

describe('Unit: files-entity', () => {
  beforeAll(() => {
    filesExternalRepository.fetchOne = jest.fn().mockResolvedValue({
      id: 'test-id',
      eTag: 'eTag',
      lastModified: new Date(),
      size: 1,
    });
    filesExternalRepository.fetchDownloadLink = jest.fn().mockResolvedValue({
      link: 'https://s3.amazonaws.com/test-id?response-content-type=application%2Foctet-stream',
    });
  });

  afterEach(() => filesExternalRepository.fetchDownloadLink.mockRestore());

  describe('fetchOne with link', () => {
    test('should return the file with its link', async() => {
      const res = await fetchOne('test-id', true);
      expect(res).toEqual(
        expect.objectContaining({
          ...fileExpected,
          link: expect.any(String),
        }),
      );
    });
  });

  describe('fetchOne without link', () => {
    test('should return the file without link', async() => {
      const res = await fetchOne('test-id', false);
      expect(res).toEqual(
        expect.objectContaining({
          ...fileExpected,
        }),
      );
    });
  });
});
