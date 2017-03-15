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

### Tasks

- [x] Prepare development environment with GruntJS, QUnit
- [x] Introduce jQuery with tests
- [x] Introduce Modernizr with tests
- [ ] Add function that creates a data structure representing every relevant link

## Development environment setup

Uses [Grunt](http://gruntjs.com/) for task automation with core team's [QUnit](https://qunitjs.com/) plugin.

### Setting up GruntJS

Type these commands from the project root.

```bash
npm install -g grunt-cli
npm install
```

### Running tests

All tests are placed within the `/tests/tests.js` directory and run against the fixture within `tests/test-runner.html`. Run tests with the ```grunt test``` command