'use strict';

angular.module('exel.main', ['ngRoute'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('main', {
            url:'/',
            templateUrl: 'main/main.html',
            controller: 'MainPageController'
        })
}])

.controller('MainPageController', ['$scope', function($scope) {
;

}]);