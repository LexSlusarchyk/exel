'use strict';

angular.module('exel.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'PortfolioController'
  });
}])

.controller('PortfolioController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
$http.get('portfolio/portfolio.json').success(function(data) {
    $scope.portfolio = data;

});



			function init() {
				
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			
		};

$timeout(init, 1000);
}]);