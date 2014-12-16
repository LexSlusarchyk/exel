'use strict';

angular.module('exel.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutUsController'
  });
}])

.controller('AboutUsController', [function() {

}]);

