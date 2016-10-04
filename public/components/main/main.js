angular.module('MainController', [])
    .controller('mainController', ['$scope', function($scope) {

        // set undefined $scope variables
        $scope.x, $scope.y, $scope.operation;

        // explicitly set primitive value to numeric value of 0
        $scope.baseValue = Number(0);

        // set $scope.addValue to be empty array
        $scope.valueString = "0";

        // set keypad values
        $scope.keypad = [];

        // iife to populate and manipulate array values for population
        (function() {
            // populate keypad array
            for (var i = 1; i < 10; i++) {
                $scope.keypad.push(i);
            }
            // add 0 to last index
            $scope.keypad.push(0);

            return $scope.keypad;
        })();

        // add number value to valueString ->
        // when a user clicks on a number, it is concatenated to the valueString
        $scope.addValueToString = function(val) {

            var stringVal = String(val),
                newStr = $scope.valueString + stringVal;

            return $scope.valueString = newStr;
        };

        // SET VALUE when user clicks on operation method
        // parameter passed in is $scope.valueString **
        $scope.setVal = function(val, operation) {

            // declare undefined paramValue to set param to
            var paramValue;

            // set operation type
            $scope.operation = operation;

            // if baseValue !== 0, set to $scope.x;
            // when the baseValue is being continued in the operation,
            // setting the baseValue to $scope.x will allow the equation to continue on
            if (typeof $scope.baseValue !== undefined) {
                $scope.x = $scope.baseValue;
            }

            // coerce value string into a number
            if (typeof val !== 'number') {
                paramValue = Number(val);
            } else {
                paramValue = val; // should never get here, but just in case...
            }

            // if $scope.x is defined, set $scope.y
            if (typeof $scope.x === 'number') {
                $scope.y = paramValue;
            } else {
                $scope.x = paramValue;
            }

            // set $scope.valueArray to empty array;
            $scope.valueString = "0";
        };

        // CLEAR BASE VALUE
        $scope.clearBaseValue = function() {

            // set both x and y values to be undefined
            $scope.x = undefined;
            $scope.y = undefined;

            // check to make sure that baseValue type is number
            if (typeof $scope.baseValue !== 'number') {
                // if not, coerce to number
                $scope.baseValue = Number();
            }

            // if $scope.baseValue = 0 -> return
            if ($scope.baseValue !== 0) {
                return $scope.baseValue = 0;
            } else {
                return;
            }
        };

        // SCOPE EQUATION METHODS ----------------------------------------------
        //
        // these methods expose two values,
        // 1. the returned value of the operation a user selects.
        // 2. setting the string value of the $scope.operation which will be
        //    used when the $scope.equals method is called

        // method for addition
        $scope.add = function() {
            // evaluate the equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x + $scope.y;
            };
            // set the case for the operation
            //$scope.operation = "add";

            return evaluate();
        };

        // method for subtraction
        $scope.subtract = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x - $scope.y;
            };
            // set the case for the operation
            //$scope.operation = "subtract";

            return evaluate();
        };

        // method for multiplication
        $scope.multiply = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x * $scope.y;
            };
            // set case for operation
            //$scope.operation = "multiply";

            return evaluate();
        };

        // method for division
        $scope.divide = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x / $scope.y;
            };
            // set case for operation
            //$scope.operation = "divide";

            return evaluate();
        };

        // EQUALS EVALUATION SWITCH CASE ---------------------------------------
        //
        // uses a switch case to determine which function to use to evaluate
        // the x and y scope variables.
        $scope.equals = function() {
            switch ($scope.operation) {
                case "add":
                    $scope.add();
                    break;
                case "subtract":
                    $scope.subtract();
                    break;
                case "multiply":
                    $scope.multiply();
                    break;
                case "divide":
                    $scope.divide();
                    break;
            }
        };

    }]);
