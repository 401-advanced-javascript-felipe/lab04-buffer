'use strict';

const utils = require('../utils');

jest.mock('fs');

describe('Running the buffer and creating a new file', () => {

  it('should take an data returning a buffer ', () => {
    // Arrange
    let data = 'Hello';
    data = data.split('');
    let expectedValue = Buffer.from('Hello');

    // Act
    let result = utils.runBuffer(data);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Buffer);
    expect(result).toEqual(expectedValue);
  });

  it('can save a file', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return utils.createFile('foo.txt', b)
      .then( success => {
        expect(success).toBeUndefined();
      });
  });

  it('raises an error if a file is invalid', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return utils.createFile(undefined, b)
      .then( success => {
        expect(success).toBeUndefined();
      })
      .catch( err => {
        expect(err).toBeDefined();
      });
  });

});
