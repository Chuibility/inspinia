'use strict';
angular.module('nouislider', []).directive('slider', function () {
    return {
        restrict: 'A',
        scope: {
            start: '@',
            step: '@',
            end: '@',
            callback: '@',
            margin: '@',
            ngModel: '=',
            ngFrom: '=',
            ngTo: '='
        },
        link: function (scope, element, attrs) {
            var callback, fromParsed, parsedValue, slider, toParsed;
            slider = $(element);
            callback = scope.callback ? scope.callback : 'slide';
            if (scope.ngFrom != null && scope.ngTo != null) {
                fromParsed = null;
                toParsed = null;
                slider.noUiSlider({
                    start: [
                        scope.ngFrom || scope.start,
                        scope.ngTo || scope.end
                    ],
                    step: parseFloat(scope.step || 1),
                    connect: true,
                    margin: parseFloat(scope.margin || 0),
                    range: {
                        min: [parseFloat(scope.start)],
                        max: [parseFloat(scope.end)]
                    }
                });
                slider.on(callback, function () {
                    var from, to, _ref;
                    _ref = slider.val(), from = _ref[0], to = _ref[1];
                    fromParsed = parseFloat(from);
                    toParsed = parseFloat(to);
                    return scope.$apply(function () {
                        scope.ngFrom = fromParsed;
                        return scope.ngTo = toParsed;
                    });
                });
                scope.$watch('ngFrom', function (newVal, oldVal) {
                    if (newVal !== fromParsed) {
                        return slider.val([
                            newVal,
                            null
                        ]);
                    }
                });
                return scope.$watch('ngTo', function (newVal, oldVal) {
                    if (newVal !== toParsed) {
                        return slider.val([
                            null,
                            newVal
                        ]);
                    }
                });
            } else {
                parsedValue = null;
                slider.noUiSlider({
                    start: [scope.ngModel || scope.start],
                    step: parseFloat(scope.step || 1),
                    range: {
                        min: [parseFloat(scope.start)],
                        max: [parseFloat(scope.end)]
                    }
                });
                slider.on(callback, function () {
                    parsedValue = parseFloat(slider.val());
                    return scope.$apply(function () {
                        return scope.ngModel = parsedValue;
                    });
                });
                return scope.$watch('ngModel', function (newVal, oldVal) {
                    if (newVal !== parsedValue) {
                        return slider.val(newVal);
                    }
                });
            }
        }
    };
});