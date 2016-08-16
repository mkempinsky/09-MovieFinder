(function(){
  'use strict';
  angular
      .module('app', ['ui.router'])
      .config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/search');

        $stateProvider
          .state('search',{
            url: '/search',
            templateUrl: '/search/search.html',
            controller: 'searchController as search'
          })
          .state('detail',{
            url: '/details',
            templateUrl: '/details/details.html',
            controller: 'detailsController as details'
          });

      });
})();