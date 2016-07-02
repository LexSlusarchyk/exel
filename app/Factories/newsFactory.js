angular.module('exel').factory('newsService', ['$http', '$q', '$modal', function($http, $q, $modal, Cropper) {
     
    var newsService = {};
    var defer;


    _createArticle = function(article) {
    	defer = $q.defer();
    	console.log("dd");
    	$http.post('api/news/createArticle.php', article).success(function(data){
            defer.resolve(data);
        });
        return defer.promise;
    }
  
	_getNews = function() {
		defer = $q.defer();
		$http.get('api/news/getNews.php').success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_getArticle = function(id) {
		var defer = $q.defer();
		$http.post('api/news/getArticle.php', id).success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_editArticle = function(article) {
		defer = $q.defer();
		$http.post('api/news/editArticle.php', article).success(function(data){
			defer.resolve(data);
		});
		return defer.promise;
	}

	_deleteArticle = function(id) {
		defer = $q.defer();
		$http.post('api/news/deleteArticle.php', id).success(function(data){
			defer.resolve(data);
		});
		return defer.promise
	};

	
	

	



	newsService.createArticle = _createArticle;
	newsService.getNews = _getNews;
	newsService.getArticle = _getArticle;
	newsService.editArticle = _editArticle;
	newsService.deleteArticle = _deleteArticle;
	
	
	
    return newsService;
}]);