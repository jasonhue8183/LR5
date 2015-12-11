'use strict';

angular.module('angularjsstatefullnocacheApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


