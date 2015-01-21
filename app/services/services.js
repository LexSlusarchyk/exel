'use strict';

angular.module('exel.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesController'
  });
}])

.controller('ServicesController', ['$scope', "$http", function($scope, $http) {


$http.get('services/services.json').success(function(data) {
    $scope.services = data;
});



$(document).on('click', '.cat > .list-group-item', function(event) {
        event.stopPropagation();
        var $this = $(this);
        var parent = $this.data('parent');
        var actives = parent && $(parent).find('.collapse.in');
        
        if (actives && actives.length) {
            actives.collapse('hide');
        }
});



}]);