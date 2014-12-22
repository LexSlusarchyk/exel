(function(){
  angular.module('exel')
  .controller("ApplicationController", ["$scope", function($scope){
      
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