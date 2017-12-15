(function(){
  angular.module('exel')
  .controller("ApplicationController", ["$scope", "$location", "CONFIG", 'catService', 'productsService', function($scope, $location, CONFIG, catService, productsService){

  	$scope.main = CONFIG.MAIN;
    $scope.products = CONFIG.PRODUCTS;
  	$scope.about = CONFIG.ABOUT;
  	$scope.offers = CONFIG.OFFERS;
  	$scope.portfolio = CONFIG.PORTFOLIO;
  	$scope.contacts = CONFIG.CONTACTS;
     
    $scope.isActive = function (viewLocation) { 
    
        return viewLocation === $location.path().split('/')[1];
    };

    catService.getCats().then(function(data){
        $scope.categories = data;
        
    });

    $scope.lostproducts = [];

    $scope.onSelectOptionChanged = function() {
        $location.path('/main') 
        $scope.lostproducts.length = 0;
        $scope.searchProduct();
    }
   
    $scope.searchProduct = function() {

        var params = {
        limit: 10,
        offset: $scope.lostproducts.length
        }

        if ($scope.title) {
            params.title = $scope.title
        }

        if ($scope.title.length > 2) {
            productsService.searchProduct(params).then(function(response) {
                    console.log(response);
                if (response) {

                    for (var i =0; i < response.length; i++) {

                    $scope.lostproducts.push(response[i]);

                    }
                }
            })
        }
    }


    $scope.title = null;

    $scope.cleanFilter = function() {

        $scope.lostproducts.length = 0;
        $scope.title = null;
    }


//Для стилю корзини
 //   $scope.cartstyle = null;

  //  $scope.cartStyle = function() {   
 //       if (localStorage.getItem('shoppingCarts')) {
 //          $scope.cartstyle = false;
 //       } else {
 //           $scope.cartstyle = true;
  //      }
//        console.log($scope.cartstyle);
 //   }

 //   $scope.cartStyle();

  }]);
})(); 