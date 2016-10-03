describe('mainController', function() {

    var $controller, mainController;

    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('AppRoutes'));
    beforeEach(angular.mock.module('MainController'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    // initial values on page load ---------------------------------------------

    it('should be defined', function() {
        var $scope = {};
        var controller = $controller('mainController', {$scope: $scope});
    });

    describe('$scope.x', function() {
        it('should be undefined on page init', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.x).not.toBeDefined();
        });
    });

    describe('$scope.y', function() {
        it('should be undefined on page init', function() {
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

    describe('$scope.valueArray', function() {
        it('should be defined as an array', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect(typeof $scope.valueArray).toBe('object');
            expect($scope.valueArray).toEqual([]);
        });
    });

    describe('$scope.operation', function() {
        it('should be undefined on page init', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.operation).not.toBeDefined();
        });
    });

    describe('$scope.keypad', function() {
        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.keypad).toBeDefined();
        });

        it('should have a length of 10', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.keypad.length).toBe(10);
        });

        it('should start with 1', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.keypad[0]).toEqual(1);
        });

        it('should end with 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.keypad[9]).toEqual(0);
        });
    });

    // user interaction events -------------------------------------------------

    describe('$scope.addValueToArray', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.addValueToArray).toBeDefined();
        });

        it('should push a number value into the valueArray object', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.addValueToArray("10");
            expect($scope.valueArray).toEqual([10]);
        });
    });

    describe('$scope.setVal()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.setVal).toBeDefined();
        });

        it('should set baseValue to $scope.x if defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.baseValue = 10;
            $scope.setVal([23]);
            expect($scope.x).toEqual(10);
            expect($scope.y).toEqual(23);
        });

        it('should set $scope.y to a number', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 10;
            $scope.setVal([1,2,3]);
            expect(typeof $scope.y).toBe('number');
            expect($scope.y).toEqual(123);
        });

        it('should set valueArray to an empty array', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.setVal([1,2,3]);
            expect($scope.valueArray).toEqual([]);
        });
    });

    describe('$scope.clearBaseValue()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.clearBaseValue).toBeDefined();
        });

        it('should coerce $scope.baseValue to a number', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.baseValue = ["3"];
            $scope.clearBaseValue();
            expect(typeof $scope.baseValue).toBe('number');
        });

        it('should set both $scope.x and $scope.y to be undefined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.clearBaseValue();
            expect($scope.x).not.toBeDefined();
            expect($scope.y).not.toBeDefined();
        });

        it('should set baseValue to 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.baseValue = 3;
            $scope.clearBaseValue();
            expect($scope.baseValue).toEqual(0);
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
            $scope.add();
            expect($scope.baseValue).toEqual(6);
        });

        it('should set $scope.operation to "add"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.add();
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
            $scope.subtract();
            expect($scope.baseValue).toEqual(3);

        });

        it('should set $scope.operation to "subtract"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.subtract();
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
            $scope.multiply();
            expect($scope.baseValue).toEqual(15);
        });

        it('should set $scope.operation to "multiply"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.multiply();
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
            $scope.divide();
            expect($scope.baseValue).toEqual(12);
        });

        it('should set $scope.operation to "divide"', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.divide();
            expect($scope.operation).toBe("divide");
        });
    });

    describe('$scope.equals()', function() {

        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.equals).toBeDefined();
        });

        it('should evaluate add method and $scope.baseValue should return 6', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "add";
            $scope.x = 2;
            $scope.y = 4;
            $scope.equals();
            expect($scope.baseValue).toEqual(6);
        });

        it('should evaluate subtract method and $scope.baseValue should return -2', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "subtract";
            $scope.x = 2;
            $scope.y = 4;
            $scope.equals();
            expect($scope.baseValue).toEqual(-2);
        });

        it('should evaluate multiply method and $scope.baseValue should return 15', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "multiply";
            $scope.x = 3;
            $scope.y = 5;
            $scope.equals();
            expect($scope.baseValue).toEqual(15);
        });

        it('should evaluate divide method and $scope.baseValue should return 0.2', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "divide";
            $scope.x = 5;
            $scope.y = 25;
            $scope.equals();
            expect($scope.baseValue).toEqual(0.2);
        });
    });

    describe('Chained events to evaluate and process values', function() {

        it('should evaluate the chained events', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.baseValue = 12;
            $scope.addValueToArray("1");
            $scope.addValueToArray("2");
            $scope.addValueToArray("3");
            $scope.setVal($scope.valueArray);
            expect($scope.x).toEqual(12);
            expect($scope.y).toEqual(123);
        });
    });

});
