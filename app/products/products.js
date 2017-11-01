'use strict';

angular.module('exel')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        // .state('news', {
        //     url:'/news',
        //     templateUrl: 'news/news.html',
        //     controller: 'NewsController'
        // })

        .state('products', {
            url:'/products/:productId',
            templateUrl: 'products/product.html',
            controller: 'ProductsController'
        })
}])

// .controller('NewsController', ['$scope', '$location', '$state', '$stateParams', 'newsService', function($scope, $location, $state, $stateParams, newsService) {
//     newsService.getNews().then(function(data){
//         $scope.news = data;
//     })
// }])

.controller('ProductsController', ['$scope', '$location', '$state', '$stateParams', 'productsService', 'modalsService', function($scope, $location, $state, $stateParams, productsService, modalsService) {
    console.log("xx")
    productsService.getProduct($stateParams.productId).then(function(data){
        $scope.product = data;
        console.log($scope.product);
    })

    productsService.getProducts().then(function(data){
        $scope.products = data.reverse();
    })

    $scope.callModal = function () {
        modalsService.openModal();
    }

    $scope.callOrderModal = function () {
        if (!$scope.product) { return false; }

        modalsService.openOrderModal($scope.product.id);
    }

}])