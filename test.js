'use strict';
var assert = require('assert');
var execPromise = require('./');

it('should resolve', function (cb) {
  execPromise('echo "hello"')
    .then(cb)
    .catch(cb);
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
