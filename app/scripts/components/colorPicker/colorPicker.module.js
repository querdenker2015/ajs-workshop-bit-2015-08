/**
 * Created by gerd on 06.08.2015.
 */
(function () {
    angular.module('bit.colorPicker', [])
        .directive('bitColorPicker', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/colorPicker.html',
                scope: {
                    r: '@',
                    g: '@',
                    b: '@'
                }
            };
        });
}());