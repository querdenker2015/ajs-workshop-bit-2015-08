/**
 * Created by gerd on 06.08.2015.
 */
(function() {
    angular.module('bit.workshop')
        .directive('bitBookPreview', BookPreviewDirective);

    function BookPreviewDirective() {
        // Directive Definition Object (DDO)
        return {
            restrict: 'E',
            templateUrl: 'templates/bookPreview.html',
            scope: {
                book: '=',
                maxchars: '@',
                onRateBook: '&'
            }
        };
    }
}());