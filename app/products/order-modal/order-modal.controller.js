'use strict';

angular.module('exel')




.controller('OrderModalController', ['$scope', '$location', '$state', '$stateParams', 'productsService', 'modalsService', 'productId',
             function($scope, $location, $state, $stateParams, productsService, modalsService, productId) {
 
    productsService.getProduct(productId).then(function(data){
        $scope.product = data;
    })

}]) 