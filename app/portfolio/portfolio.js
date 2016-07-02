'use strict';

angular.module('exel.portfolio', ['ui.bootstrap'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('portfolio', {
            url:'/portfolio',
            templateUrl: 'portfolio/portfolio.html',
            controller: 'PortfolioController'
        })
        .state('portfolio.all', {
            url:'/:filterId',
            templateUrl: 'portfolio/portfolioAll.html',
            controller: 'PortfolioAllController'
        })
        .state('portfolio.item', {
            url:'/item/:itemId',
            templateUrl: 'portfolio/portfolioItem.html',
            controller: 'PortfolioItemController'
        })
}])

.controller('PortfolioController', ['$scope', '$location', '$state', '$stateParams', '$filter', 'portfolioService', 'catService', function($scope, $location, $state, $stateParams, $filter, portfolioService, catService) {


$scope.selectedTab = $location.path().split('/')[2];

catService.getCats().then(function(data){
  $scope.categories = data;
})

$scope.selectTab = function(select) {
  $scope.selectedTab = select;
  $state.go('portfolio.all', {filterId: select});
}

}])

.controller('PortfolioAllController', ['$scope', '$stateParams', '$filter', 'portfolioService', 'catService', function($scope, $stateParams, $filter, portfolioService, catService) {

portfolioService.getItems().then(function(data){
  $scope.portfolio = data;
  console.log($scope.portfolio)
})

if($stateParams.filterId) {
  $scope.myFilter = $stateParams.filterId;
  $scope.selectedTab = $stateParams.filterId;
  $filter('filter')($scope.portfolio, $scope.filterFn);
}
  
$scope.filterFn = function(item) {
    if(item.c_id === $scope.myFilter) {
        return true; 
    }
    return false; 
};


}])

.controller('PortfolioItemController', ['$scope', '$stateParams', 'portfolioService', function($scope, $stateParams, portfolioService) {

  portfolioService.getItem($stateParams.itemId).then(function(data){
    $scope.item = data;
  })

}])
