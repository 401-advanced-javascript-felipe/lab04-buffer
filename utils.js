'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.runBuffer = (data) => {
  let buffer = Buffer.from('');

  data.forEach(element => {
    buffer = Buffer.concat([buffer, Buffer.from(element)]);
  });
  return buffer;
};

exports.createFile = (file, buffer) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, buffer, (err) => {
      if(err) reject(err);
      else resolve(undefined);
    });
  });
};
