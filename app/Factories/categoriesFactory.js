angular.module('exel').factory('catService', ['$http', '$q', '$modal', 'Cropper', function($http, $q, $modal, Cropper) {
     
    var catService = {};
    var defer;


    _createCat = function(category) {
    	defer = $q.defer();
    	$http.post('api/categories/createCat.php', category).success(function(data){
            defer.resolve(data);
        });
        return defer.promise;
    }
  
	_getCats = function() {
		defer = $q.defer();
		$http.get('api/categories/getCats.php').success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_getSubcat = function(id) {
		var defer = $q.defer();
		$http.post('api/categories/getSubcat.php', id).success(function(data){
	        defer.resolve(data);
	       
	    });
	    return defer.promise;
	};

	_deleteCat = function(id) {
		defer = $q.defer();
		$http.post('api/categories/deleteCat.php', id).success(function(data){
			defer.resolve(data);
		});
		return defer.promise
	};

	_createSubcat = function(subcat) {
		defer = $q.defer();
		$http.post('api/categories/createSubcat.php', subcat).success(function(data){
			defer.resolve(data);
		});
		return defer.promise;
	}

	_editSubcat = function(subcat) {
		defer = $q.defer();
		$http.post('api/categories/editSubcat.php', subcat).success(function(data){
			defer.resolve(data);
		});
		return defer.promise;
	}

	_deleteSubcat = function(id) {
		defer = $q.defer();
		$http.post('api/categories/deleteSubcat.php', id).success(function(data){
			defer.resolve(data);
		});
		return defer.promise
	}



	catService.createCat = _createCat;
	catService.getCats = _getCats;
	catService.getSubcat = _getSubcat;
	catService.deleteCategory = _deleteCat;
	catService.createSubcat = _createSubcat;
	catService.editSubсat = _editSubcat;
	catService.deleteSubcat = _deleteSubcat;
	
	
    return catService;
}]);