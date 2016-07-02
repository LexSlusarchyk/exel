'use strict';

angular.module('exel')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
        // .state('news', {
        //     url:'/news',
        //     templateUrl: 'news/news.html',
        //     controller: 'NewsController'
        // })

        .state('news', {
            url:'/news/:articleId',
            templateUrl: 'news/article.html',
            controller: 'NewsController'
        })
}])

// .controller('NewsController', ['$scope', '$location', '$state', '$stateParams', 'newsService', function($scope, $location, $state, $stateParams, newsService) {
//     newsService.getNews().then(function(data){
//         $scope.news = data;
//     })
// }])

.controller('NewsController', ['$scope', '$location', '$state', '$stateParams', 'newsService', 'modalsService', function($scope, $location, $state, $stateParams, newsService, modalsService) {
    console.log("xx")
    newsService.getArticle($stateParams.articleId).then(function(data){
        $scope.article = data;
    })

    newsService.getNews().then(function(data){
        $scope.news = data.reverse();
    })

    $scope.callModal = function () {
        modalsService.openModal();
    }

}])