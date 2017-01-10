/**
 * angular-bootstrap-duallistbox
 * @version v0.1.0 - 2015-06-13
 * @author Francesco Pontillo (francescopontillo@gmail.com)
 * @link https://github.com/frapontillo/angular-bootstrap-duallistbox
 * @license Apache License 2.0
 **/

'use strict';
// Source: common/module.js
angular.module('frapontillo.bootstrap-duallistbox', []);
// Source: dist/.temp/directives/bsDuallistbox.js
angular.module('frapontillo.bootstrap-duallistbox').directive('bsDuallistbox', [
    '$compile',
    '$timeout',
    function ($compile, $timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function link(scope, element, attrs) {
                //000011111111110000000000022222222220000000000000000000003333333333000000000000004444444444444440000000005555555555555550000000666666666666666000000000000000777777777700000000000000000008888888888
                var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
                // The select collection
                var collection = attrs.ngOptions.match(NG_OPTIONS_REGEXP)[7];
                var getBooleanValue = function (attributeValue) {
                    return attributeValue === true || attributeValue === 'true';
                };
                // The attribute names to $observe with related functions to call
                var attributes = {
                    'bootstrap2': {
                        changeFn: 'setBootstrap2Compatible',
                        transformFn: getBooleanValue
                    },
                    'postfix': 'setHelperSelectNamePostfix',
                    'selectMinHeight': {
                        changeFn: 'setSelectOrMinimalHeight',
                        defaultValue: 100
                    },
                    'filter': {
                        changeFn: 'setShowFilterInputs',
                        defaultValue: true,
                        transformFn: getBooleanValue
                    },
                    'filterClear': {
                        changeFn: 'setFilterTextClear',
                        defaultValue: 'show all'
                    },
                    'filterPlaceholder': 'setFilterPlaceHolder',
                    'filterValues': {
                        changeFn: 'setFilterOnValues',
                        transformFn: getBooleanValue
                    },
                    'moveOnSelect': {
                        changeFn: 'setMoveOnSelect',
                        defaultValue: true,
                        transformFn: getBooleanValue
                    },
                    'preserveSelection': 'setPreserveSelectionOnMove',
                    'moveSelectedLabel': 'setMoveSelectedLabel',
                    'moveAllLabel': 'setMoveAllLabel',
                    'removeSelectedLabel': 'setRemoveSelectedLabel',
                    'removeAllLabel': 'setRemoveAllLabel',
                    'selectedListLabel': 'setSelectedListLabel',
                    'nonSelectedListLabel': 'setNonSelectedListLabel',
                    'infoAll': {
                        changeFn: 'setInfoText',
                        defaultValue: 'Showing all {0}'
                    },
                    'infoFiltered': {
                        changeFn: 'setInfoTextFiltered',
                        defaultValue: '<span class="label label-warning">Filtered</span> {0} from {1}'
                    },
                    'infoEmpty': {
                        changeFn: 'setInfoTextEmpty',
                        defaultValue: 'Empty list'
                    }
                };
                // The duallistbox element
                var dualListBox;
                /**
                 * Calculates the proper attribute value, given its name.
                 * The attribute value depends on:
                 *   - the current value
                 *   - the default value, if it exists
                 *   - the transformFn, if it exists
                 *
                 * If the current value is undefined, it gets the default value.
                 * The calculated value is then applied to the transformFn, if it is defined; the result is then returned.
                 *
                 * @param attributeName The {String} name of the attribute.
                 * @returns {Object} representing the value of the attribute.
                 */
                var getAttributeValueOrDefault = function (attributeName) {
                    // get the attribute function/object for default and transformation
                    var attributeFunction = attributes[attributeName];
                    // get the current attribute value
                    var attributeValue = attrs[attributeName];
                    // By default, the default value and the transform function are not defined
                    var defaultValue;
                    var transformFn;
                    // If the attributeFunction is an object
                    if (angular.isObject(attributeFunction)) {
                        // extract the default value and the transform function
                        defaultValue = attributeFunction.defaultValue;
                        transformFn = attributeFunction.transformFn;
                    }
                    // If the upcoming value is falsy, get the default
                    if (!attributeValue) {
                        attributeValue = defaultValue;
                    }
                    // If a transform function is defined, use it to change the value
                    if (angular.isFunction(transformFn)) {
                        attributeValue = transformFn(attributeValue);
                    }
                    return attributeValue;
                };
                /**
                 * Gets the name of the function of `bootstrap-duallistbox` to be called to effectively
                 * change the attribute in input.
                 *
                 * @param attributeName The name of the attribute to change.
                 * @returns {String}, name of the `bootstrap-dual-listbox` to be called.
                 */
                var getAttributeChangeFunction = function (attributeName) {
                    // get the attribute function/object for default and transformation
                    var attributeFunction = attributes[attributeName];
                    // By default, attributeFunction is a function
                    var actualFunction = attributeFunction;
                    // If the attributeFunction is an object
                    if (angular.isObject(attributeFunction)) {
                        // extract the actual function name
                        actualFunction = attributeFunction.changeFn;
                    }
                    return actualFunction;
                };
                /**
                 * Listen to model changes.
                 */
                var listenToModel = function () {
                    // When ngModel changes, refresh the list
                    // controller.$formatters.push(refresh);
                    scope.$watch(attrs.ngModel, function () {
                        initMaybe();
                        refresh();
                    });
                    // When ngOptions changes, refresh the list
                    scope.$watch(collection, refresh, true);
                    // Watch for changes to the filter scope variables
                    scope.$watch(attrs.filterNonSelected, function () {
                        refresh();
                    });
                    scope.$watch(attrs.filterSelected, function () {
                        refresh();
                    });
                    // $observe every attribute change
                    angular.forEach(attributes, function (attributeFunction, attributeName) {
                        attrs.$observe(attributeName, function () {
                            var actualFunction = getAttributeChangeFunction(attributeName);
                            var actualValue = getAttributeValueOrDefault(attributeName);
                            // Depending on the attribute, call the right function (and always refresh)
                            element.bootstrapDualListbox(actualFunction, actualValue, true);
                        });
                    });
                };
                /**
                 * Refresh the Dual List Box using its own API.
                 */
                var refresh = function () {
                    // TODO: consider removing $timeout calls
                    $timeout(function () {
                        element.bootstrapDualListbox('refresh');
                    });
                };
                /**
                 * If the directive has not been initialized yet, do so.
                 */
                var initMaybe = function () {
                    // if it's the first initialization
                    if (!dualListBox) {
                        init();
                    }
                };
                // Delay listbox init
                var init = function () {
                    var defaults = {};
                    // for every attribute the directive handles
                    angular.forEach(attributes, function (attributeFunction, attributeName) {
                        var actualValue = getAttributeValueOrDefault(attributeName);
                        defaults[attributeName] = actualValue;
                    });
                    // Init the plugin
                    dualListBox = element.bootstrapDualListbox({
                        bootstrap2Compatible: defaults.bootstrap2,
                        filterTextClear: defaults.filterClear,
                        filterPlaceHolder: defaults.filterPlaceholder,
                        moveSelectedLabel: defaults.moveSelectedLabel,
                        moveAllLabel: defaults.moveAllLabel,
                        removeSelectedLabel: defaults.removeSelectedLabel,
                        removeAllLabel: defaults.removeAllLabel,
                        moveOnSelect: defaults.moveOnSelect,
                        preserveSelectionOnMove: defaults.preserveSelection,
                        selectedListLabel: defaults.selectedListLabel,
                        nonSelectedListLabel: defaults.nonSelectedListLabel,
                        helperSelectNamePostfix: defaults.postfix,
                        selectOrMinimalHeight: defaults.selectMinHeight,
                        showFilterInputs: defaults.filter,
                        nonSelectedFilter: '',
                        selectedFilter: '',
                        infoText: defaults.infoAll,
                        infoTextFiltered: defaults.infoFiltered,
                        infoTextEmpty: defaults.infoEmpty,
                        filterOnValues: defaults.filterValues
                    });
                    // Inject the ng-model into the filters and re-compile them
                    var container = element.bootstrapDualListbox('getContainer');
                    var filterNonSelectedInput = container.find('.box1 .filter');
                    filterNonSelectedInput.attr('ng-model', attrs.filterNonSelected);
                    $compile(filterNonSelectedInput)(scope);
                    var filterSelectedInput = container.find('.box2 .filter');
                    filterSelectedInput.attr('ng-model', attrs.filterSelected);
                    $compile(filterSelectedInput)(scope);
                };
                // Listen and respond to model changes
                listenToModel();
                // On destroy, collect ya garbage
                scope.$on('$destroy', function () {
                    element.bootstrapDualListbox('destroy');
                });
            }
        };
    }
]);