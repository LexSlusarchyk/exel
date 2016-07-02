angular.module('exel').factory('portfolioService', ['$http', '$q', '$modal', function($http, $q, $modal, Cropper) {
     
    var portfolioService = {};
    var defer;


    _createItem = function(item) {
    	defer = $q.defer();
    	console.log("dd");
    	$http.post('api/portfolio/createItem.php', item).success(function(data){
    		console.log(data);
            defer.resolve(data);
        });
        return defer.promise;
    }
  
	_getItems = function() {
		defer = $q.defer();
		$http.get('api/portfolio/getItems.php').success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_getItem = function(id) {
		var defer = $q.defer();
		$http.post('api/portfolio/getItem.php', id).success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_editItem = function(item) {
		defer = $q.defer();
		$http.post('api/portfolio/editItem.php', item).success(function(data){
			defer.resolve(data);
		});
		return defer.promise;
	}

	_deleteItem = function(id) {
		defer = $q.defer();
		$http.post('api/portfolio/deleteItem.php', id).success(function(data){
			defer.resolve(data);
		});
		return defer.promise
	};

	
	portfolioService.createItem = _createItem;
	portfolioService.getItems = _getItems;
	portfolioService.getItem = _getItem;
	portfolioService.editItem = _editItem;
	portfolioService.deleteItem = _deleteItem;
	
    return portfolioService;
}]);