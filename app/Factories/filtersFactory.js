angular.module('exel').factory('filtersService', ['$http', '$q', '$modal', function($http, $q, $modal, Cropper) {
     
    var filtersService = {}; 


	_getMakers = function(id) {
		var defer = $q.defer();
		$http.get('api/filters/getMakers.php', id).success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	filtersService.getMakers = _getMakers;
	
	
    return filtersService;
}]);