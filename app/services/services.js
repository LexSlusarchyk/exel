'use strict';

angular.module('exel.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesController'
  });
}])

.controller('ServicesController', [function() {

}]);