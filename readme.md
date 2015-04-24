# exec-promise [![Build Status](https://travis-ci.org/chmontgomery/exec-promise.svg?branch=master)](https://travis-ci.org/chmontgomery/exec-promise)

> Executes a command line string using child_process.exec under the covers, wrapped in a bluebird promise for convenience.


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
  
/*=>
  total 40
  -rw-r--r--  1 montgomeryc  staff   518 Apr 24 13:50 index.js
  -rw-r--r--  1 montgomeryc  staff  1131 Apr 24 13:43 license
  drwxr-xr-x  3 montgomeryc  staff   102 Apr 24 13:48 node_modules
  -rw-r--r--  1 montgomeryc  staff   626 Apr 24 13:55 package.json
  -rw-r--r--  1 montgomeryc  staff   934 Apr 24 13:59 readme.md
  -rw-r--r--  1 montgomeryc  staff   409 Apr 24 13:54 test.js
 */
```


## API

### `execPromise(cmd[,options])`

#### cmd

*Required*  
Type: `string`

Command line to execute

#### options

##### foo

Type: `object`  
Default: `null`

[Node exec options object](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)


## License

MIT © [Chris Montgomery](https://github.com/chmontgomery)
