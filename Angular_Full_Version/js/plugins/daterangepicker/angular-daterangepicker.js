(function() {
    var picker;

    picker = angular.module('daterangepicker', []);

    picker.constant('dateRangePickerConfig', {
        separator: ' - ',
        format: 'YYYY-MM-DD',
        clearLabel: 'Clear'
    });

    picker.directive('dateRangePicker', ['$compile', '$timeout', '$parse', 'dateRangePickerConfig', function($compile, $timeout, $parse, dateRangePickerConfig) {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                dateMin: '=min',
                dateMax: '=max',
                model: '=ngModel',
                opts: '=options',
                clearable: '='
            },
            link: function($scope, element, attrs, modelCtrl) {
                var clear, customOpts, el, locale, opts, _formatted, _init, _picker, _setEndDate, _setStartDate, _validateMax, _validateMin;
                el = $(element);
                customOpts = $scope.opts;
                opts = angular.extend({}, dateRangePickerConfig, customOpts);
                _picker = null;
                clear = function() {
                    _picker.setStartDate();
                    _picker.setEndDate();
                    return el.val('');
                };
                _setStartDate = function(newValue) {
                    return $timeout(function() {
                        var m;
                        if (_picker) {
                            if (!newValue) {
                                return clear();
                            } else {
                                m = moment(newValue);
                                if (_picker.endDate < m) {
                                    _picker.setEndDate(m);
                                }
                                return _picker.setStartDate(m);
                            }
                        }
                    });
                };
                _setEndDate = function(newValue) {
                    return $timeout(function() {
                        var m;
                        if (_picker) {
                            if (!newValue) {
                                return clear();
                            } else {
                                m = moment(newValue);
                                if (_picker.startDate > m) {
                                    _picker.setStartDate(m);
                                }
                                return _picker.setEndDate(m);
                            }
                        }
                    });
                };
                $scope.$watch('model.startDate', function(newValue) {
                    return _setStartDate(newValue);
                });
                $scope.$watch('model.endDate', function(newValue) {
                    return _setEndDate(newValue);
                });
                _formatted = function(viewVal) {
                    var f;
                    f = function(date) {
                        if (!moment.isMoment(date)) {
                            return moment(date).format(opts.format);
                        }
                        return date.format(opts.format);
                    };
                    if (opts.singleDatePicker) {
                        return f(viewVal.startDate);
                    } else {
                        return [f(viewVal.startDate), f(viewVal.endDate)].join(opts.separator);
                    }
                };
                _validateMin = function(min, start) {
                    var valid;
                    min = moment(min);
                    start = moment(start);
                    valid = min.isBefore(start) || min.isSame(start, 'day');
                    modelCtrl.$setValidity('min', valid);
                    return valid;
                };
                _validateMax = function(max, end) {
                    var valid;
                    max = moment(max);
                    end = moment(end);
                    valid = max.isAfter(end) || max.isSame(end, 'day');
                    modelCtrl.$setValidity('max', valid);
                    return valid;
                };
                modelCtrl.$formatters.push(function(val) {
                    if (val && val.startDate && val.endDate) {
                        _setStartDate(val.startDate);
                        _setEndDate(val.endDate);
                        return val;
                    }
                    return '';
                });
                modelCtrl.$parsers.push(function(val) {
                    if (!angular.isObject(val) || !(val.hasOwnProperty('startDate') && val.hasOwnProperty('endDate'))) {
                        return modelCtrl.$modelValue;
                    }
                    if ($scope.dateMin && val.startDate) {
                        _validateMin($scope.dateMin, val.startDate);
                    } else {
                        modelCtrl.$setValidity('min', true);
                    }
                    if ($scope.dateMax && val.endDate) {
                        _validateMax($scope.dateMax, val.endDate);
                    } else {
                        modelCtrl.$setValidity('max', true);
                    }
                    return val;
                });
                modelCtrl.$isEmpty = function(val) {
                    return !val || val.startDate === null || val.endDate === null;
                };
                modelCtrl.$render = function() {
                    if (!modelCtrl.$modelValue) {
                        return el.val('');
                    }
                    if (modelCtrl.$modelValue.startDate === null) {
                        return el.val('');
                    }
                    return el.val(_formatted(modelCtrl.$modelValue));
                };
                if (attrs.clearable) {
                    locale = opts.locale || {};
                    locale.cancelLabel = opts.clearLabel;
                    opts.locale = locale;
                    el.on('cancel.daterangepicker', function() {
                        el.val('');
                        return el.trigger('change');
                    });
                }
                _init = function() {
                    var callbackFunction, eventType, _ref;
                    el.daterangepicker(opts, function(start, end) {
                        $timeout(function() {
                            return modelCtrl.$setViewValue({
                                startDate: start,
                                endDate: end
                            });
                        });
                        return modelCtrl.$render();
                    });
                    _picker = el.data('daterangepicker');
                    _ref = opts.eventHandlers;
                    for (eventType in _ref) {
                        callbackFunction = _ref[eventType];
                        el.on(eventType, callbackFunction);
                    }
                };
                _init();
                el.change(function() {
                    if ($.trim(el.val()) === '') {
                        return $timeout(function() {
                            return modelCtrl.$setViewValue({
                                startDate: null,
                                endDate: null
                            });
                        });
                    }
                });
                if (attrs.min) {
                    $scope.$watch('dateMin', function(date) {
                        if (date) {
                            if (!modelCtrl.$isEmpty(modelCtrl.$modelValue)) {
                                _validateMin(date, modelCtrl.$modelValue.startDate);
                            }
                            opts['minDate'] = moment(date);
                        } else {
                            opts['minDate'] = false;
                        }
                        return _init();
                    });
                }
                if (attrs.max) {
                    $scope.$watch('dateMax', function(date) {
                        if (date) {
                            if (!modelCtrl.$isEmpty(modelCtrl.$modelValue)) {
                                _validateMax(date, modelCtrl.$modelValue.endDate);
                            }
                            opts['maxDate'] = moment(date);
                        } else {
                            opts['maxDate'] = false;
                        }
                        return _init();
                    });
                }
                if (attrs.options) {
                    $scope.$watch('opts', function(newOpts) {
                        opts = angular.extend(opts, newOpts);
                        return _init();
                    });
                }
                return $scope.$on('$destroy', function() {
                    return _picker != null ? _picker.remove() : void 0;
                });
            }
        };
    }]);

}).call(this);