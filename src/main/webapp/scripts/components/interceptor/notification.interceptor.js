 'use strict';

angular.module('angularjsstatefullnocacheApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-angularjsstatefullnocacheApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-angularjsstatefullnocacheApp-params')});
                }
                return response;
            }
        };
    });
