(function(){
  angular.module('exel')
  .controller("ApplicationController", ["$scope", "$location", "CONFIG", function($scope, $location, CONFIG){

  	$scope.main = CONFIG.MAIN;
    $scope.products = CONFIG.PRODUCTS;
  	$scope.about = CONFIG.ABOUT;
  	$scope.offers = CONFIG.OFFERS;
  	$scope.portfolio = CONFIG.PORTFOLIO;
  	$scope.contacts = CONFIG.CONTACTS;
     


$scope.isActive = function (viewLocation) { 
    
        return viewLocation === $location.path().split('/')[1];
    };

  }]);
})();