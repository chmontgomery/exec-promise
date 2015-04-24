# exec-promise [![Build Status](https://travis-ci.org/chmontgomery/exec-promise.svg?branch=master)](https://travis-ci.org/chmontgomery/exec-promise)

> Executes a command line string using child_process.exec under the covers, wrapped in a [bluebird promise](https://github.com/petkaantonov/bluebird) for convenience.


## Install

```
$ npm install --save exec-promise
```


## Usage

```js
var execPromise = require('exec-promise');

execPromise('ls -l')
  .then(function() {
    console.log('done!');
  })
  .catch(function(err) {
    throw err;
  });
  
/*
total 16
-rw-r--r--  1 montgomeryc  staff  162 Apr 24 14:40 index.js
drwxr-xr-x  3 montgomeryc  staff  102 Apr 24 14:40 node_modules
-rw-r--r--  1 montgomeryc  staff  271 Apr 24 14:40 package.json
done!
 */
```


## API

### `execPromise(cmd[,options])`

#### cmd

*Required*  
Type: `string`

Command line to execute

#### options

Type: `object`  
Default: `null`

[The node.js child_process.exec options object](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)


## License

MIT © [Chris Montgomery](https://github.com/chmontgomery)