(function() {
    'use strict';

    angular
        .module('app')
        .controller('detailController', detailController);

    detailController.$inject = ['$stateParams', 'searchService'];

    /* @ngInject */
    function detailController($stateParams, searchService) {
        var vm = this;

        vm.movieId = $stateParams.movieId;
        vm.movieDetails = {};

        searchService.getMovieDetails(vm.movieId).then(function(response) {
            vm.movieDetails = response.data;
            console.log(response);
        }, function(err) {
        	Materialize.toast('Error getting movie details',4000);
            console.log(err);
        });
      }

})();

