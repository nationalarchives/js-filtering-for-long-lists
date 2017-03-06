# JavaScript for long filters

## Purpose

To progressively enhance _very_ long lists of links (several thousand) to provide filtering capability which is: 

* Accessible 
* Fast enough not to hinder the user experience

## Approach

1. Use feature detection to identify if:
    - JavaScript is available
    - HTML5 IndexedDB API is available
2. Sad path [JavaScript and/or IndexedDB is not available]
    - Show message suggesting browser search (achieved through CSS hook)
    - Exit
2. Happy path [JavaScript and IndexedDB are available]
    - Check for presence of IndexedDB collection. If it exists, skip creation
    - Parse HTML and create IndexedDB collection representing links in the page, including location and text
    - Hide server sent HTML and introduce a search box
    - Bind changes to search box to handler that:
        - hides any existing results (if any are shown)
        - queries the database link text
        - renders the results to the page
        - updates any ARIA information

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