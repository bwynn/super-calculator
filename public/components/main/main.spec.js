describe('mainController', function() {

    //beforeEach(module('ngCalcApp'));

    var $controller, mainController;

    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('AppRoutes'));
    beforeEach(angular.mock.module('MainController'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('should be defined', function() {
        var $scope = {};
        var controller = $controller('mainController', {$scope: $scope});
    })

    describe('$scope.baseValue', function() {
        it('is set to the value of 0 on initialization', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect(typeof $scope.baseValue).toEqual('number');
            expect($scope.baseValue).toEqual(0);
        });
    });
});
