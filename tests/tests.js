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

QUnit.test("An object representing the links is present", function (assert) {
    assert.equal(typeof TNALongLists, 'object', "TNALongLists exists");
    assert.equal(typeof TNALongLists.$links, 'object', "TNALongLists.$links exits");
    assert.notEqual(typeof TNALongLists.$links.jquery, 'undefined', "TNALongLists is a jQuery wrapped set");

    TNALongLists.$links.each(function (item) {
        assert.equal($(this)[0].nodeName, 'A', 'Every item in TNALongLists.$links is an A');
    });
});