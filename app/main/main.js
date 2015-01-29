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

.controller('MainPageController', ['$scope', '$animate', function($scope,$animate) {
$scope.slides = [{"image": "images/clients/1.jpg"}, {"image": "images/clients/2.jpg"}, {"image": "images/clients/3.jpg"}, {"image": "images/clients/4.jpg"}, {"image": "images/clients/5.jpg"}, {"image": "images/clients/6.jpg"}, {"image": "images/clients/7.jpg"}, {"image": "images/clients/8.jpg"}, {"image": "images/clients/9.jpg"}, {"image": "images/clients/10.jpg"}, {"image": "images/clients/11.jpg"}, {"image": "images/clients/12.jpg"}]
$animate.enabled(false);
$scope.myInterval = 4000;


$scope.$watch('slides', function(values) {
  var i, a = [], b;

  for (i = 0; i < $scope.slides.length; i += 4) {
    b = { image1: $scope.slides[i] };

    if ($scope.slides[i + 3]) {
      b.image2 = $scope.slides[i + 1];
      b.image3 = $scope.slides[i + 2];
      b.image4 = $scope.slides[i + 3];
    }

    a.push(b);
  }

  $scope.groupedSlides = a;
}, true);




}]);