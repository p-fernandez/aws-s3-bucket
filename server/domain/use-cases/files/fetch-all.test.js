'use strict';

const fetchAllCommand = require('./fetch-all');

const BadRequestError = require('../../interfaces/errors/bad-request-error');

describe('Integration: fetch-all', () => {
  describe('Does not throw errors if', () => {
    test.each([
      [undefined],
      [true],
      ['true'],
    ])('withLink is %p', async(withLink) => {
      const res = await fetchAllCommand(withLink);
      if (res.length > 0) {
        expect(res).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
            }),
          ])
        );
      } else {
        expect(res).toEqual([]);
      }
    });
  });

  describe('Throw errors if', () => {
    test.each([
      [null, '"withLink" must be a boolean'],
      [1, '"withLink" must be a boolean'],
      ['test', '"withLink" must be a boolean'],
      [false, '"withLink" contains an invalid value'],
    ])('withLink is %p', async(withLink, expected) => {
      const res = fetchAllCommand(withLink);
      await expect(res).rejects.toThrow(BadRequestError);
      await expect(res).rejects.toThrow(expected);
    });
  });
});
