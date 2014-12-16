'use strict';

// Declare app level module which depends on views, and components
angular.module('exel', [
  'ngRoute',
  'exel.main',
  'exel.about',
  'exel.services',
  'exel.portfolio',
  'exel.contacts',
  'exel.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
