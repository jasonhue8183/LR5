'use strict';

angular.module('angularjsstatefullnocacheApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    },
                    'sideBar@': {
                    	template: '<sidebar></sidebar>'
                    }
                },
                resolve: {
                	loadMyDirectives:function($ocLazyLoad){
                		return $ocLazyLoad.load(
                            {
                                name:'angularjsstatefullnocacheApp',
                                files:[
                                'scripts/components/sidebar/sidebar.js',
                                'scripts/components/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            })
                	}
                }
            });
    });
