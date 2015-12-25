'use strict';

angular.module('angularjsstatefullnocacheApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboardmenu', {
                parent: 'dashboardsidemenu',
                url: '/dashboard',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/dashboard/view.html',
                        controller:'DashboardCtrl'
                    }
                },
                resolve :{
                }
            });
    });
