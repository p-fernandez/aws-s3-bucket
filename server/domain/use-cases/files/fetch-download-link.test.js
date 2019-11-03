'use strict';

const fetchDownloadLinkCommand = require('./fetch-download-link');

const BadRequestError = require('../../interfaces/errors/bad-request-error');

describe('Integration: fetch-download-link', () => {
  describe('With a valid fake id', () => {
    test('Does not throw validation errors and returns valid object', async() => {
      const res = await fetchDownloadLinkCommand('test-id');
      expect(res).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          link: expect.any(String),
        }),
      );
      const { link } = res;
      expect(link).toMatch(/(\.amazonaws\.com|&response-content-type=application%2Foctet-stream)/);
    });
  });

  describe('With an invalid id', () => {
    describe('Throw errors if', () => {
      const expectedValue = (value) => `"id" with value "${value}" fails to match the required pattern: /^[ a-zA-Z0-9!\\-_,.*'()]+$`;
      test.each([
        [null, '"id" must be a string'],
        ['&&&', expectedValue('&&&')],
        ['<script>alert("test")</script>', expectedValue('<script>alert("test")</script>')],
        [false, '"id" must be a string'],
      ])('id is %p', async(id, expected) => {
        const res = fetchDownloadLinkCommand(id);
        await expect(res).rejects.toThrow(BadRequestError);
        await expect(res).rejects.toThrow(expected);
      });
    });
  });
});
