angular.module('exel').factory('ordersService', ['$http', '$q', '$modal', function($http, $q, $modal) {
     
    var ordersService = {};
    var defer;


    _createOrder = function(category) {
    	defer = $q.defer();
    	$http.post('api/categories/createCat.php', category).success(function(data){
            defer.resolve(data);
        });
        return defer.promise;
    }
  	
    _getOrder = function(id) {
		var defer = $q.defer();
		$http.post('api/products/getProduct.php', id).success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_getOrders = function() {
		defer = $q.defer();
		$http.get('api/categories/getCats.php').success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};


	_deleteOrder = function(id) {
		defer = $q.defer();
		$http.post('api/categories/deleteCat.php', id).success(function(data){
			defer.resolve(data);
		});
		return defer.promise
	};



	ordersService.createOrder = _createCat;
	ordersService.getCats = _getCats;
	ordersService.getSubcat = _getSubcat;
	ordersService.deleteCategory = _deleteCat;
	ordersService.createSubcat = _createSubcat;
	ordersService.editSubсat = _editSubcat;
	ordersService.deleteSubcat = _deleteSubcat;
	
	
    return ordersService;
}]); 