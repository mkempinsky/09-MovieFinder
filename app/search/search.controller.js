(function() {
    'use strict';

    angular
        .module('app')
        .controller('searchController', searchController);

    searchController.$inject = ['searchService', '$stateParams', '$rootScope'];

    /* @ngInject */
    function searchController(searchService, $stateParams, $rootScope) {
        var vm = this;
        vm.movieSearch= $stateParams.movieSearch;
        vm.searchResults = {};
        vm.clearMovie = clearMovie;

        if(vm.movieSearch != undefined && vm.movieSearch.length > 0) {
            searchMovie();
        }

        function clearMovie() {
            alert('calling clear search');
            $rootScope.$broadcast('clearSearch');
        }

        function searchMovie() {
            console.log(vm.movieSearch);
            searchService.searchMovies(vm.movieSearch).then(function(response) {
                console.log(response);
                vm.searchResults = response.data;
                vm.movieSearch= "";
                if (vm.searchResults.Response= 'False'){
                    Materialize.toast(vm.searchResults.Error,4000);
                    vm.movieSearch="";
                }

            }, function(err) {
                Materialize.toast('Error getting search results',4000);
                console.log(err);
            });
        }

    }


       
})();