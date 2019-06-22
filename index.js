'use strict';

const utils = require('./utils');

let code = '\'use strict\';\nlet array = [\'Johnny\',\'John\',\'Johnathan\'];\narray.forEach(el =>{\n  console.log(el);\n});\n';
code = code.split('');

let buffer = utils.runBuffer(code);
let filePath = './files/loop.js';

utils.createFile(filePath, buffer);
