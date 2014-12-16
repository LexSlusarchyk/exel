'use strict';

angular.module('exel.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'PortfolioController'
  });
}])

.controller('PortfolioController', [function() {

}]);