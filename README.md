# JavaScript for long filters

## Purpose

To progressively enhance _very_ long lists of links (several thousand) to provide filtering capability which is: 

* Accessible 
* Fast enough not to hinder the user experience

## Development environment setup

Uses [GulpJS](http://gulpjs.com/) for task automation with [QUnit](https://qunitjs.com/) plugin.

### Setting up GulpJS

Type these commands from the project root.

```bash
npm install gulp-cli -g
npm install gulp -D
npm install --save-dev gulp-qunit
```

### Running tests

All tests are placed within the `/tests/tests.js` directory and run against the fixture within `tests/test-runner.html`. Run tests with the ```gulp test``` command