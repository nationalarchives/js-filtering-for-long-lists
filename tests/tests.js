QUnit.test("jQuery exists", function (assert) {
    assert.equal(typeof window.$, 'function', "jQuery exists");
});

QUnit.test("Modernizr exists", function (assert) {
    assert.equal(typeof Modernizr, 'object', "Modernizr exists");
    assert.equal(typeof Modernizr.indexeddb, 'object', "Modernizr detect for IndexedDb is present");
});