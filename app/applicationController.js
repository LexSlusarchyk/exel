(function(){
  angular.module('exel')
  .controller("ApplicationController", ["$scope", "$location", "CONFIG", function($scope, $location, CONFIG){

  	$scope.main = CONFIG.MAIN;
  	$scope.about = CONFIG.ABOUT;
  	$scope.services = CONFIG.SERVICES;
  	$scope.portfolio = CONFIG.PORTFOLIO;
  	$scope.contacts = CONFIG.CONTACTS;
     
$('header li').click(function(){
          $("header").find("li.active").removeClass("active");
          $(this).addClass("active");
    });
$('.site-name a, .logo img').click(function(){
          $("header").find("li.active").removeClass("active");
          $("header li:first-child").addClass("active");
    });

  }]);
})();