'use strict';

angular.module('exel.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsController'
  });
}])

.controller('ContactsController', ['$scope', function($scope) {
 function initialize() {

$scope.$digest();
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(49.813706, 24.038067),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
         var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: 'Hello World!'
  });
}
      google.maps.event.addDomListener(window, 'load', initialize);
$scope.$digest();

}]);