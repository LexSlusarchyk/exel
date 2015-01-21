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


.controller('ModalInstanceCtrl', function ($scope, $modalInstance, $animate, work) {

  $scope.work = work;

$animate.enabled(false);
$scope.myInterval = 5000;
  var slides = $scope.slides = [{
      image: work.imageUrl,
      // text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
      //   ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    }];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }


});