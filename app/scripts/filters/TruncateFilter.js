/**
 * Created by gerd on 06.08.2015.
 */
(function () {
    angular.module('bit.workshop')
        .filter('truncate', TruncateFilter);

    function TruncateFilter() {
        /**
         *
         */
        return function (str, len, postfix) {
            str = str || '';
            len = len || str.length;
            postfix = postfix || '';

            return str.substr(0, len) + postfix;
        };
    }
}());