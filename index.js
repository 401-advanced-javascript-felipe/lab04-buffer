'use strict';

const fs = require('fs');

let code = '\'use strict\';\nlet array = [\'Johnny\',\'John\',\'Johnathan\'];\narray.forEach(el =>{\n  console.log(el);\n});\n';
code = code.split('');

let runBuffer = (data) => {
  let buffer = Buffer.from('');

  data.forEach(element => {
    buffer = Buffer.concat([buffer, Buffer.from(element)]);
  });
  return buffer;
};

let createFile = () => {
  fs.writeFile('./files/loop.js', runBuffer(code), (err) => {
    if(err) throw err;
    console.log('Created a file');
  });
};

// createFile();

module.exports = exports = {runBuffer, createFile};
