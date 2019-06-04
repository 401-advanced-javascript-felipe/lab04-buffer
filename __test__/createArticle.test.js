'use strict';

const Converter = require('../createArticle');

describe('ConverterClass', () => {
  let conversion;

  beforeEach(() => {
    conversion = new Converter();
  });

  it('should create a new instance of Converter', () => {
    expect(conversion).toBeInstanceOf(Converter);
  });

});
