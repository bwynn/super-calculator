describe('mainController', function() {

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
    });

    describe('$scope.x', function() {
        it('should be undefined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.x).not.toBeDefined();
        });
    });

    describe('$scope.y', function() {
        it('should be undefined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.y).not.toBeDefined();
        });
    });

    describe('$scope.baseValue', function() {
        it('value should be a number set to 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect(typeof $scope.baseValue).toEqual('number');
            expect($scope.baseValue).toEqual(0);
        });
    });

    describe('$scope.operation', function() {
        it('should be undefined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.operation).not.toBeDefined();
        });
    });

    describe('$scope.add()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.add).toBeDefined();
        })

        it('should return evaluate method for addition', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 2;
            $scope.y = 4;
            $scope.add().evaluate();
            expect($scope.baseValue).toEqual(6);
        });

        it('should set $scope.operation to "add"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.add().operation();
            expect($scope.operation).toBe("add");
        });
    });

    describe('$scope.subtract()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.subtract).toBeDefined();
        });

        it('should return evaluate method for subtraction', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 6;
            $scope.y = 3;
            $scope.subtract().evaluate();
            expect($scope.baseValue).toEqual(3);

        });

        it('should set $scope.operation to "subtract"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.subtract().operation();
            expect($scope.operation).toBe("subtract");
        });
    });

    describe('$scope.multiply()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.multiply).toBeDefined();
        });

        it('should return evaluate method for multiplication', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 5;
            $scope.y = 3;
            $scope.multiply().evaluate();
            expect($scope.baseValue).toEqual(15);
        });

        it('should set $scope.operation to "multiply"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.multiply().operation();
            expect($scope.operation).toBe("multiply");
        });
    });

    describe('$scope.divide()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.divide).toBeDefined();
        });

        it('should return evaluate method for division', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 60;
            $scope.y = 5;
            $scope.divide().evaluate();
            expect($scope.baseValue).toEqual(12);
        });

        it('should set $scope.operation to "divide"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.divide().operation();
            expect($scope.operation).toBe("divide");
        });
    });

});
