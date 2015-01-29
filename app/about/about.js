'use strict';

angular.module('exel.about', ['ngRoute'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('about', {
            url:'/about',
            templateUrl: 'about/about.html',
            controller: 'AboutUsController'
        })
}])


.controller('AboutUsController', ['$scope', function($scope) {



}]);

