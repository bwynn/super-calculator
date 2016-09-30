angular.module('AppRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $routeProvider.when('/', {
            templateUrl: 'components/main/main.html',
            controller: 'mainController'
        });
    }]);
