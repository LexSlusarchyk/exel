'use strict';

angular.module('exel.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsController'
  });
}])

.controller('ContactsController', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {


uiGmapGoogleMapApi.then(function(maps) {

    });
$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}]);