var exec = require('child_process').exec;
var bluebird = require('bluebird');

module.exports = function (cmd, opts) {
  return new bluebird(function (resolve, reject) {
    var child = exec(cmd, opts, function (err, stdout, stderr) {
      if (err) {
        reject(err);
      }
      else {
        resolve(stdout);
      }
    });
    child.stdout.on('data', function (chunk) {
      process.stdout.write(chunk);
    });
    child.stderr.on('data', function (chunk) {
      process.stdout.write(chunk);
    });
  });
};
