"use strict";

angular.module('myApp', [])
    .controller('ColorPickerCtrl', function () {
        this.r = 127;
        this.g = 255;
        this.b = 0;
    })
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
