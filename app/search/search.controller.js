(function() {
    'use strict';

    angular
        .module('app')
        .controller('searchController', searchController);

    searchController.$inject = ['searchService', '$stateParams'];

    /* @ngInject */
    function searchController(searchService, $stateParams) {
        var vm = this;
        vm.movieSearch= $stateParams.movieSearch;
        vm.searchResults = {};

        if(vm.movieSearch != undefined && vm.movieSearch.length > 0) {
            searchMovie();
        }

        function searchMovie() {
            searchService.searchMovies(vm.movieSearch).then(function(response) {
                console.log(response);
                vm.searchResults = response.data;
                vm.movieSearch= "";

            }, function(err) {
                console.log(err);
            });
        }

    }


       
})();