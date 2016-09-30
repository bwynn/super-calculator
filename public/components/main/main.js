angular.module('components.main', [])
    .controller('MainController', [function() {

    }])
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'components/main/main.html',
                controller: 'MainController as mc'
            });
    });
