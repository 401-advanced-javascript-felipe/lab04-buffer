'use strict';

const fs = require('fs');

const path = './files/pair-programming.html';

const articleStart = '<article>';
const articleEnd = '</article>';
const h2Start = '<h2>';
const h2End = '</h2>';

const initArticle = () => fs.writeFile(path, articleStart, (err) => {
  if (err) throw err;
});
let article = Buffer.from('');

// fs.readFile(path, (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   return data;
// });




// const writeArticleStart = new Promise(
//   (resolve, reject) => {
//     resolve(fs.write(path, articleStart, (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     }));
//   }
// );


fs.readFile(path, (err, data) => {
  if (err) throw err;
  // console.log(data);
  return data;
});
  

let readingArticle = () => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    console.log('reading article', data);
    article = Buffer.concat([article, data]);

  });
  resolve('Read Article');
});





let createhtml = () => {
  readingArticle()
    .then(console.log('here', article))
    .then(fs.appendFile(path, article, (err) => {
      if (err) throw err;
    }));

};







createhtml();
