'use strict';

angular.module('angularjsstatefullnocacheApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboardsidemenu', {
                abstract: true,
                parent: 'site'
            });
    });
