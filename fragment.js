(function ($) {
    var namespace = "fragment";

    function getFragment(element) {
        var $e = $(element),
            fragment = $e.data(namespace);
        if (!fragment) {
            fragment = $(document.createDocumentFragment());
            $e.data(namespace, fragment);
        }
        return fragment;
    }

    $.fn.appendToFragment = function () {
        var args = arguments;
        return this ? this.each(function (_, element) {
            $.fn.append.apply(getFragment(element), args);
        }) : this;
    };

    $.fn.prependToFragment = function () {
        var args = arguments;
        return this ? this.each(function (_, element) {
            $.fn.prepend.apply(getFragment(element), args);
        }) : this;
    };

    $.fn.appendFragment = function () {
        return this ? this.each(function (_, element) {
            var $e = $(element);
            $e.append($e.data(namespace)).removeData(namespace);
        }) : this;
    };

    $.fn.prependFragment = function () {
        return this ? this.each(function (_, element) {
            var $e = $(element);
            $e.prepend($e.data(namespace)).removeData(namespace);
        }) : this;
    };

    $.fn.removeFragment = function () {
        return this ? this.removeData(namespace) : this;
    };

})(jQuery);