"use strict";

angular.module('bit.workshop', [
    'bit.colorPicker',
    'ngRoute'
])
    .controller('ColorPickerCtrl', function () {
        this.r = 127;
        this.g = 255;
        this.b = 0;
    })
    .constant('moment', window.moment);
