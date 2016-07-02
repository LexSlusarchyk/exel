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

.controller('ServicesController', ['$scope', "$http", "catService", function($scope, $http, catService) {


// $http.get('services/services.json').success(function(data) {
//     $scope.services = data;

// });



catService.getCats().then(function(data){
  $scope.services = data;
  console.log(data);
})



$(document).on('click', '.cat > .list-group-item', function(event) {
        var actives = $(document).find('.collapse.in');
        if (actives) {
            actives.collapse('hide');
        }
})




}])

.controller('ServicesDetailController', ['$scope', '$animate', '$stateParams',  "$http", '$modal', 'catService', function($scope, $animate, $stateParams, $http, $modal, catService) {


// $http.get('services/cats/'+ $stateParams.id +'.json').success(function(data) {
//     $scope.service = data;
//     $scope.slides = $scope.service.imagesUrl        

// });

catService.getSubcat($stateParams.id).then(function(data){
    $scope.service = data;
})




$animate.enabled(false);
$scope.myInterval = 4000;

$scope.modal = function (state) {
    var modalInstance = $modal.open({
      templateUrl: 'services/myModalContent.html',
      controller: 'ModalInstanceCtrl2',
      size: 'md',
      resolve: {
        
      }
    })
  };

}])
.controller('ModalInstanceCtrl2', function ($scope, $modalInstance) {

});