(function ($) {
    var fragments = [];
    
    function index(element) {
        for (var i = 0; i < fragments.length; i++) {
            if (fragments[i].element === element) {
                return i;
            }
        }
        return false;
    }

    function get(element) {
        var i = index(element);
        if (i === false) {
          fragments.push({element: element, fragment: $(document.createDocumentFragment())});
          i = fragments.length - 1;
        }
        return fragments[i];
    }
    
    function remove(index) {
        fragments[index].fragment = null;
        fragments[index].element = null;
        delete fragments[index];
        for (var i = 0; i < fragments.length; i++) {
            if (fragments[i]) {
                return;
            }
        }
        fragments = [];
    }

    $.fn.appendToFragment = function () {
        var args = arguments;
        return this.each(function (_, element) {
            $.fn.append.apply(get(element).fragment, args);
        });
    };

    $.fn.prependToFragment = function () {
        var args = arguments;
        return this.each(function (_, element) {
            $.fn.prepend.apply(get(element).fragment, args);
        });
    };

    $.fn.appendFragment = function () {
        return this.each(function (_, element) {
            var i = index(element);
            if (i !== false) {
                $(element).append(fragments[i].fragment);
                remove(i);
            }
        });
    };

    $.fn.prependFragment = function () {
        return this.each(function (_, element) {
            var i = index(element);
            if (i !== false) {
                $(element).prepend(fragments[i].fragment);
                remove(i);
            }
        });
    };

    $.fn.removeFragment = function () {
        return this.each(function (_, element) {
            var i = index(element);
            if (i !== false) {
                remove(i);
            }
        });
    };

})(jQuery);