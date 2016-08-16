(function() {
    'use strict';

    angular
        .module('app')
        .service('searchService', searchService);

    searchService.$inject = ['$http'];

    function searchService($http) {
        return {
            searchMovies: function(movie) {
                return $http.get("https://omdbapi.com/?s=" + movie);
            }
        };
    }
})();