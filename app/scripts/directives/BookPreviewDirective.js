/**
 * Created by gerd on 06.08.2015.
 */
(function () {
    angular.module('bit.workshop')
        .directive('bitBookPreview', BookPreviewDirective);

    function BookPreviewDirective($log) {
        // Directive Definition Object (DDO)
        return {
            restrict: 'EA',
            templateUrl: 'templates/bookPreview.html',
            scope: {
                book: '=',
                maxchars: '@',
                onRateBook: '&'
            },
            transclude: true,
            require: ['?bitFoo'],
            link: function (scope, element, attrs, ctrls) {
                // $log.debug(scope, element, attrs);
                var BitFooController = ctrls[0];

                element.css({
                    color: 'goldenrod'
                });

                //scope.$watch('book', function(newValue, oldValue) {
                //    $log.debug(newValue, oldValue);
                //});
            },
            controller: BookPreviewController,
            controllerAs: 'preview',
            bindToController: true
        };
    }

    /**
     *
     * @constructor
     */
    function BookPreviewController($log, $scope, $element, $attrs) {
        $log.debug(this.book);

        // $scope.$watch('preview.book', angular.noop);

        // Public API
        this.rateBook = rateBook;

        /**
         *
         * @param value
         */
        function rateBook(value) {
            $log.debug(value, this);
            this.onRateBook({
                rating: value
            });
        }
    }

}());