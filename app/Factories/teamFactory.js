angular.module('exel').factory('teamService', ['$http', '$q', '$modal', function($http, $q, $modal, Cropper) {
     
    var teamService = {};
    var defer;


    _createMember = function(member) {
    	defer = $q.defer();
    	$http.post('api/team/createMember.php', member).success(function(data){
            defer.resolve(data);
        });
        return defer.promise;
    }
  
	_getMembers = function() {
		defer = $q.defer();
		$http.get('api/team/getMembers.php').success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_getMember = function(id) {
		var defer = $q.defer();
		$http.post('api/team/getMember.php', id).success(function(data){
	        defer.resolve(data);
	    });
	    return defer.promise;
	};

	_editMember = function(member) {
		defer = $q.defer();
		$http.post('api/team/editMember.php', member).success(function(data){
			defer.resolve(data);
		});
		return defer.promise;
	}

	_deleteMember = function(id) {
		defer = $q.defer();
		$http.post('api/team/deleteMember.php', id).success(function(data){
			defer.resolve(data);
		});
		return defer.promise
	};

	
	teamService.createMember = _createMember;
	teamService.getMembers = _getMembers;
	teamService.getMember = _getMember;
	teamService.editMember = _editMember;
	teamService.deleteMember = _deleteMember;
	
    return teamService;
}]);