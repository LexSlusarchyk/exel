'use strict';

// Declare app level module which depends on views, and components
angular.module('exel', [
  'ngRoute',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'exel.CONFIG',
  'textAngular',
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

