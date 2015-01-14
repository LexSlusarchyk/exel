'use strict';

angular.module('exel.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'PortfolioController'
  });
}])

.controller('PortfolioController', ['$scope', '$http',function($scope, $http) {
$http.get('portfolio/portfolio.json').success(function(data) {
    $scope.portfolio = data;
  });
}]);