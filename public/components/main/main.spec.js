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
        it('should be 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect(typeof $scope.x).toBe('number');
            expect($scope.x).toEqual(0);
        });
    });

    describe('$scope.y', function() {
        it('should be 0 on page init', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.y).toEqual(0);
        });
    });

    describe('$scope.result', function() {
        it('should be undefined on page init', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.result).not.toBeDefined();
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
            expect($scope.keypad[0]).toEqual('1');
        });

        it('should end with 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.keypad[9]).toEqual('0');
        });
    });

    // user interaction events -------------------------------------------------

    describe('$scope.concatString()', function() {
        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.concatString).toBeDefined();
        });

        it('should throw an error if param isnt a string or number', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.keypad[0] = undefined;
            expect(function() {$scope.concatString($scope.keypad[0]);}).toThrow(new Error("Expected either a string or a number as a parameter"));
        });

        it('should set $scope.x to equal $scope.result if $scope.result is defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 0;
            $scope.result = 13;
            $scope.keypad[4] = '5';
            $scope.concatString($scope.keypad[4]);
            expect($scope.x).toEqual(13);
        });

        it('should set $scope.y to equal value input if $scope.result is defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.result = 13;
            $scope.keypad[3] = '4';
            $scope.concatString($scope.keypad[3]);
            expect($scope.y).toEqual(4);
        });

        it('should return $scope.x value equal to $scope.result if result is a string', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.result = '45';
            $scope.keypad[3] = '4';
            $scope.concatString($scope.keypad[3]);
            expect($scope.x).toEqual(45);
        });

        it('should return $scope.x as a number value', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.keypad[1] = '2';
            $scope.concatString($scope.keypad[1]);
            expect(typeof $scope.x).toBe('number');
            expect($scope.x).toEqual(2);
        });

        it('should assign $scope.y if $scope.operation has been defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.keypad[3] = '4';
            $scope.operation = "add";
            $scope.concatString($scope.keypad[3]);
            expect($scope.y).toEqual(4);
        });
    });

    describe('$scope.setOperator()', function() {
        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.setOperator).toBeDefined();
        });

        it('should return $scope.operation as a string', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "add";
            $scope.setOperator($scope.operation);
            expect($scope.operation).toEqual("add");
        });

        it('should set $scope.result if $scope.x and $scope.y are defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "subtract";
            $scope.x = 15;
            $scope.y = 3;
            $scope.setOperator($scope.operation);
            expect($scope.result).toEqual(12);
        });

        it('should set $scope.y to 0 if $scope.result is returned', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "multiply";
            $scope.x = 4;
            $scope.y = 4;
            $scope.setOperator($scope.operation);
            expect($scope.result).toEqual(16);
            expect($scope.y).toEqual(0);
        });
    });

    describe('$scope.clearResults()', function() {
        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.clearResults).toBeDefined();
        });

        it('should set $scope.x and $scope.y to 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 3;
            $scope.y = 4;
            $scope.clearResults();
            expect($scope.x).toEqual(0);
            expect($scope.y).toEqual(0);
        });

        it('should set $scope.operation to undefined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "add";
            $scope.clearResults();
            expect($scope.operation).not.toBeDefined();
        });

        it('should set $scope.result to undefined', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.result = 12;
            $scope.clearResults();
            expect($scope.result).not.toBeDefined();
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
            expect($scope.result).toEqual(6);
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
            expect($scope.result).toEqual(3);

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
            expect($scope.result).toEqual(15);
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
            expect($scope.result).toEqual(12);
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
            expect($scope.result).toEqual(6);
        });

        it('should evaluate subtract method and $scope.baseValue should return -2', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "subtract";
            $scope.x = 2;
            $scope.y = 4;
            $scope.equals();
            expect($scope.result).toEqual(-2);
        });

        it('should evaluate multiply method and $scope.baseValue should return 15', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "multiply";
            $scope.x = 3;
            $scope.y = 5;
            $scope.equals();
            expect($scope.result).toEqual(15);
        });

        it('should evaluate divide method and $scope.baseValue should return 0.2', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.operation = "divide";
            $scope.x = 5;
            $scope.y = 25;
            $scope.equals();
            expect($scope.result).toEqual(0.2);
        });
    });

});
