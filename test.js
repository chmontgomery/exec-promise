'use strict';
var assert = require('assert');
var execPromise = require('./');

it('should resolve output', function (cb) {
  execPromise('echo "hello"')
    .then(function (stdout, stderr) {
      assert('hello' === stdout.trim());
      assert(!stderr);
      cb();
    });
});
it('should not resolve', function (cb) {
  execPromise('this-cmd-does-not-exist')
    .then(function () {
      cb(new Error('Command should fail'))
    })
    .catch(function (er) {
      assert.ok(er);
      cb();
    });
});
