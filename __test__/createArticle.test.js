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

  it('should create opening tag', () => {
    let tag = 'li';
    let buffer = Buffer.from('hello');
    conversion.createTag(tag, buffer);
    expect(conversion.tags[tag].open).toStrictEqual(Buffer.from('<li>'));
  });

  it('should create closing tag', () => {
    let tag = 'li';
    let buffer = Buffer.from('hello');
    conversion.createTag(tag, buffer);
    expect(conversion.tags[tag].close).toStrictEqual(Buffer.from('</li>'));
  });

});
