angular.module('ngCalc', ['ui.router', 'components.main'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
