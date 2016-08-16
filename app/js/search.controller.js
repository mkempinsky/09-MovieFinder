(function() {
    'use strict';

    angular
        .module('app')
        .controller('searchController', searchController);

    searchController.$inject = ['searchService'];

    /* @ngInject */
    function searchController(searchService) {
        var vm = this;
        vm.movieSearch= "";
        vm.searchResults = {};

        vm.searchMovie = function() {
            searchService.searchMovies(vm.movieSearch).then(function(response) {
                console.log(response);
                vm.searchResults = response.data;

            }, function(err) {
                console.log(err);
            });
        };
    }

       
})();