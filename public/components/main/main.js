angular.module('MainController', [])
    .controller('mainController', ['$scope', function($scope) {

        // explicitly set primitive value to numeric value of 0
        $scope.baseValue = Number(0);

    }]);
