!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.angularFootable=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
    'use strict';

    angular
        .module('ui.footable', [])
        .directive('footable', function() {
            var events = {
                beforeFiltering: 'footable_filtering'
            };
            var extractSpecOpts = function(opts, attrs) {
                var extracted = {},
                    k;
                for (k in opts) {
                    if (k !== 'filter' && (!angular.isUndefined(events[k]))) {
                        if(!angular.isFunction(scope.$eval(attrs[k]))) {
                            extracted[k] = attrs[k];
                        }
                    }
                }
                return extracted;
            };

            var bindEventHandler = function(tableObj, scope, attrs) {
                var k;
                for (k in attrs) {
                    if (k !== 'filter' && (!angular.isUndefined(events[k]))) {
                        var targetEventName = events[k];
                        if(angular.isFunction(scope.$eval(attrs[k]))) {
                            tableObj.bind(targetEventName, scope.$eval(attrs[k]));
                        }
                    }
                }
            };

            return {
                restrict: 'C',
                link: function(scope, element, attrs) {
                    var tableOpts = {
                        'event-filtering': null
                    };

                    angular.extend(
                        tableOpts,
                        footable.options
                    );

                    angular.extend(
                        tableOpts,
                        extractSpecOpts(tableOpts, attrs)
                    );

                    var tableObj = element.footable(tableOpts);

                    bindEventHandler(tableObj, scope, attrs);

                }
            };
        });

},{}]},{},[1])

(1)
});

