'use strict';

angular.module('exel.portfolio', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'PortfolioController'
  });
}])

.controller('PortfolioController', ['$scope', '$http', '$timeout', '$modal', '$log', 'services', function($scope, $http, $timeout, $modal, $log, services) {
$http.get('portfolio/portfolio.json').success(function(data) {
    $scope.portfolio = data;
});

$scope.categories = services;

$scope.myFiltering = function(cat) {
$scope.myFilter = cat;
}

$timeout(function(){
	$('.nav-stacked li').click(function(){
	          $(".nav-stacked").find("li.active").removeClass("active");
	          $(this).addClass("active");
	}) 
});


$scope.modal = function (_work) {

    var modalInstance = $modal.open({
      templateUrl: 'portfolio/myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        work: function () {
          return _work;
        }
      }
    })
  };
}])


.controller('ModalInstanceCtrl', function ($scope, $modalInstance, work) {

  $scope.work = work;

});