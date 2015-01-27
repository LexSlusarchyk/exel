'use strict';

angular.module('exel.services', [])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('services', {
            url:'/services',
            templateUrl: 'services/services.html',
            controller: 'ServicesController'
        })
        .state('services.detail', {
            url: '/detail/:id',
            templateUrl: 'services/detail.html',
            controller: 'ServicesDetailController'
        });
}])

.controller('ServicesController', ['$scope', "$http", function($scope, $http) {


$http.get('services/services.json').success(function(data) {
    $scope.services = data;
});

$(document).on('click', '.cat > .list-group-item', function(event) {
        var $this = $(this);
        var parent = $this.data('parent');
        var actives = parent && $(parent).find('.collapse.in');
        if (actives && actives.length) {
            actives.collapse('hide');
        }
})





}])

.controller('ServicesDetailController', ['$scope', '$stateParams',  "$http", function($scope, $stateParams, $http) {


$http.get('services/cats/'+ $stateParams.id +'.json').success(function(data) {
    $scope.services = data;        

});



}])