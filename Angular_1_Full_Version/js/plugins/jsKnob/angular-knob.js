angular.module('ui.knob', [])
    .directive('knob', function () {
        return {
            restrict: 'EACM',
            template: function(elem, attrs){

                return '<input value="{{ knob }}">';

            },
            replace: true,
            scope: true,
            link: function (scope, elem, attrs) {

                scope.knob = scope.$eval(attrs.knobData);

                var renderKnob = function(){

                    scope.knob = scope.$eval(attrs.knobData);

                    var opts = {};
                    if(!angular.isUndefined(attrs.knobOptions)){
                        opts = scope.$eval(attrs.knobOptions);
                    }

                    if(!angular.isUndefined(attrs.knobMax)){
                        var max = scope.$eval(attrs.knobMax);
                        if(!angular.isUndefined(max)){

                            opts.max = max;

                        }
                    }

                    $elem = $(elem);
                    $elem.val(scope.knob);
                    $elem.change();
                    $elem.knob(opts);

                };

                var updateMax = function updateMax() {
                    var max = scope.$eval(attrs.knobMax);
                    var val = scope.$eval(attrs.knobData);
                    $elem = $(elem);
                    $elem.trigger('configure', {
                        'max': parseInt(max)
                    }).trigger('change');
                    $elem.val(val);
                    $elem.change();
                }

                scope.$watch(attrs.knobData, function () {
                    renderKnob();
                });

                scope.$watch(attrs.knobMax, function() {
                    // There is some bug with updateMax- has to be fix
                    // updateMax();
                });

                scope.$watch(attrs.knobOptions, function () {
                    renderKnob();
                }, true);

            }
        };
    });