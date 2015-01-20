(function(){
  angular.module('exel')
  .controller("ApplicationController", ["$scope", "$location", "CONFIG", function($scope, $location, CONFIG){

  	$scope.main = CONFIG.MAIN;
  	$scope.about = CONFIG.ABOUT;
  	$scope.services = CONFIG.SERVICES;
  	$scope.portfolio = CONFIG.PORTFOLIO;
  	$scope.contacts = CONFIG.CONTACTS;
     


$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  }]);
})();