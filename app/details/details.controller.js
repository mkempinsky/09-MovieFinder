(function() {
    'use strict';

    angular
        .module('app')
        .controller('detailController', detailController);

    detailController.$inject = ['$stateParams'];

    /* @ngInject */
    function detailController($stateParams) {
        var vm = this;

        vm.movieId = $stateParams.movieId;
      }

})();

