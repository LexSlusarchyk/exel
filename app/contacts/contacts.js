'use strict';

angular.module('exel.contacts', [])
.config(['$stateProvider', '$urlRouterProvider', "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
        .state('contacts', {
            url:'/contacts',
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsController'
        })
}])


.controller('ContactsController', ['$scope', '$http', '$log', '$timeout', 'uiGmapGoogleMapApi', 'teamService', function($scope, $http, $log, $timeout, uiGmapGoogleMapApi, teamService) {
	// $http.get('contacts/team.json').success(function(data) {
	//     $scope.team = data;
	// });

  teamService.getMembers().then(function(data){
      $scope.team = data;
  })


    $scope.map = {center: {latitude: 49.813706, longitude: 24.038067 }, zoom: 17 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 49.813706,
        longitude: 24.038067
      },
    };
   
}]);
