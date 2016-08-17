(function() {
    'use strict';

    angular
        .module('app')
        .controller('globalSearchController', globalSearchController);

    globalSearchController.$inject = ['$rootScope'];

    /* @ngInject */
    function globalSearchController($rootScope) {
        var vm = this;
        $rootScope.$on('clearSearch', function() {
        	alert('alert receied!');
        	vm.userSearch = '';
        });
    }
})();