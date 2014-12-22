'use strict';

angular.module('exel.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainPageController'
  });
}])

.controller('MainPageController', ['$scope', function($scope) {
$scope.named = 'komix';

}]);