'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // Some example string
    $scope.helloText = 'Welcome in INSPINIA MEAN.JS Boilerplate';
    $scope.descriptionText = 'It is an application skeleton for a typical MEAN web app. You can use it to quickly bootstrap your project.';

  }
]);
