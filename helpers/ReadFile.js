const fs = require('fs');
const Promise = require('bluebird');

// accepts path(required) and opts(optional)
ReadFile = (path, opts = 'utf8') => {
  // function is made promise since readFile uses callback
  return new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  });
}


module.exports = ReadFile;