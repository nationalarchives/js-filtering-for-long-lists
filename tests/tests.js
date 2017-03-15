QUnit.test("jQuery exists", function (assert) {
    assert.equal(typeof window.$, 'function', "jQuery exists");
});

QUnit.test("Modernizr exists", function (assert) {
    assert.equal(typeof Modernizr, 'object', "Modernizr exists");
    assert.equal(typeof Modernizr.indexeddb, 'object', "Modernizr detect for IndexedDb is present");

    var detects = ['js', 'indexeddb'];

        detects.forEach(function (index) {
        assert.ok($('html').hasClass(index), "Modernizr has added " + index + " class to html")
    })
});
<<<<<<< HEAD
=======

QUnit.test("Every ")
>>>>>>> 1a4ccb2... Introduce JS and CSS files for application code
