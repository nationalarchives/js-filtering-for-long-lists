// Using Revealing Module Pattern

var TNALongLists = (function($) {

    var $links = $('.az a');

    return {
        $links: $links
    };

})(jQuery);