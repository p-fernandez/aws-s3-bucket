'use strict';

const fetchOneCommand = require('./fetch-one');

const BadRequestError = require('../../interfaces/errors/bad-request-error');
const NotFoundError = require('../../interfaces/errors/not-found-error');

describe('Integration: fetch-one', () => {
  describe('With a valid fake id', () => {
    describe('Does not throw validation errors but throw NotFoundError', () => {
      test.each([
        [undefined],
        [true],
        ['true'],
      ])('withLink is %p', async(withLink) => {
        const res = fetchOneCommand('test-id', withLink);
        await expect(res).rejects.toThrow(NotFoundError);
      });
    });

    describe('Throw errors if', () => {
      test.each([
        [null, '"withLink" must be a boolean'],
        [1, '"withLink" must be a boolean'],
        ['test', '"withLink" must be a boolean'],
        [false, '"withLink" contains an invalid value'],
      ])('withLink is %p', async(withLink, expected) => {
        const res = fetchOneCommand('test-id', withLink);
        await expect(res).rejects.toThrow(BadRequestError);
        await expect(res).rejects.toThrow(expected);
      });
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
        const res = fetchOneCommand(id);
        await expect(res).rejects.toThrow(BadRequestError);
        await expect(res).rejects.toThrow(expected);
      });
    });
  });
});
