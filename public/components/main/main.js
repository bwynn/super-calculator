angular.module('MainController', [])
    .controller('mainController', ['$scope', function($scope) {

        // set scope.x to 0
        $scope.x = 0;

        // set scope.y to 0
        $scope.y = 0;

        // set undefined $scope variables
        $scope.operation, $scope.result;

        // set keypad values
        $scope.keypad = [];

        // iife to populate and manipulate array values for population
        (function() {
            // populate keypad array
            for (var i = 1; i < 10; i++) {
                $scope.keypad.push(String(i));
            }
            // add 0 to last index
            $scope.keypad.push(String(0));

            return $scope.keypad;
        })();

        // Concat $scope.x with values clicked on from $scope.keypad and return a number value
        // explicit coercion used to concatenate $scope.x or $scope.y values and then return a number
        $scope.concatString = function(val) {

            var newStr;

            // check to ensure value passed in is a string
            if (typeof val !== 'string' && typeof val !== 'number') {
                throw new Error("Expected either a string or a number as a parameter");
            }
            // determine if operation has been determined, thus
            // assigning to either $scope.x or $scope.y
            else if (typeof val === 'number') {
                if ($scope.result !== undefined) {
                    newStr = $scope.y + val;
                    $scope.y = Number(newStr);
                    return $scope.x = $scope.result;
                } else if ($scope.result == undefined && $scope.operation == undefined) {
                    newStr = $scope.x + val;
                    return $scope.x = Number(newStr); // coerce back to number
                } else {
                    newStr = $scope.y + val;
                    return $scope.y = Number(newStr); // coerce back to number
                }
            } else {
                if ($scope.result !== undefined) {
                    newStr = String($scope.y) + val;
                    $scope.y = Number(newStr);
                    return $scope.x = Number($scope.result);
                } else if ($scope.result == undefined && $scope.operation == undefined) {
                    newStr = String($scope.x) + val;
                    return $scope.x = Number(newStr); // coerce back to number
                } else {
                    newStr = String($scope.y) + val;
                    return $scope.y = Number(newStr); // coerce back to number
                }
            }
        };

        // Set an operator based on the parameter passed in
        $scope.setOperator = function(val) {

            // expclicity coerce the value to String
            var operator = String(val);
            // set $scope.operation value
            $scope.operation = operator;

            // if $scope.x and $scope.y are both defined, perform operation
            if ($scope.x !== undefined && $scope.y !== undefined) {
                $scope.equals();
                return $scope.operation;
            } else {
                // otherwise, return $scope.operation value
                return $scope.operation;
            }
        };

        // clear out the results and reset everything to 0
        $scope.clearResults = function() {

            // set both $scope.x and $scope.y to 0
            $scope.x = 0;
            $scope.y = 0;

            // set operator to undefined
            $scope.operation = undefined;

            // set $scope.result to undefined
            $scope.result = undefined;
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
                return $scope.result = $scope.x + $scope.y;
            };

            return evaluate();
        };

        // method for subtraction
        $scope.subtract = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.result = $scope.x - $scope.y;
            };

            return evaluate();
        };

        // method for multiplication
        $scope.multiply = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.result = $scope.x * $scope.y;
            };

            return evaluate();
        };

        // method for division
        $scope.divide = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.result = $scope.x / $scope.y;
            };

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
