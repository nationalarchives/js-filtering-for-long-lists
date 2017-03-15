// Using Revealing Module Pattern

var TNALongLists = (function ($, Dexie) {

    var $links = $('.az a');

    var extract_data_from_html = function ($els) {

        var data_from_html = [];

        $els.each(function (i) {
            var $this = $(this),
                text = $this.text(),
                url = $this.attr('href');

            data_from_html.push({id: i, text: text, url: url});
        });

        return data_from_html;
    };


    var connect_to_or_set_up_database = function (data) {

        var db = new Dexie("links_database");

        db.version(1).stores({links_data: 'id,text,url'});

        db.on("populate", function () {
            db.links_data.bulkAdd(data).then(function (lastKey) {
                console && console.log(lastKey + ' item(s) added to database');
            }).catch(Dexie.BulkError, function (e) {
                console && console.error("Some items were not added successfully");
            });
        });

        db.open().then(function (db) {
            console && console.log("Database opened successfully");
        }).catch(function (err) {
            console && console.log("Error : " + err);
        });

        return db;
    };

    var data = extract_data_from_html($links);

    var db = connect_to_or_set_up_database(data);

    return {
        $links: $links,
        db: db
    };

})(jQuery, Dexie);

