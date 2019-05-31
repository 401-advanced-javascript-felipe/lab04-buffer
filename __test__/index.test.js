'use strict';

const index = require('../index.js');

describe('Running the buffer and creating a new file', () => {

  it('should take an data returning a buffer ', () => {
    // Arrange
    let data = 'Hello';
    let input = data.split('');
    let expectedValue = Buffer.from(data);

    // Act
    let result = index.runBuffer(input);

    // Assert
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Buffer);
    expect(result).toEqual(expectedValue);
  });
});
