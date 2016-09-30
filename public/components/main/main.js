angular.module('MainController', [])
    .controller('mainController', ['$scope', function($scope) {

        // set undefined $scope variables
        $scope.x, $scope.y;

        // explicitly set primitive value to numeric value of 0
        $scope.baseValue = Number(0);

        // set $scope.operation to be undefined
        $scope.operation = undefined;

        // SET X VALUE 

        // SET Y VALUE

        // CLEAR BASE VALUE

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
            var operation = function() {
                return $scope.operation = "add";
            };

            return {
                evaluate : evaluate,
                operation: operation
            };
        };

        // method for subtraction
        $scope.subtract = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x - $scope.y;
            };
            // set the case for the operation
            var operation = function() {
                return $scope.operation = "subtract";
            };

            return {
                evaluate: evaluate,
                operation: operation
            };
        };

        // method for multiplication
        $scope.multiply = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x * $scope.y;
            };
            // set case for operation
            var operation = function() {
                return $scope.operation = "multiply";
            };

            return {
                evaluate: evaluate,
                operation: operation
            };
        };

        // method for division
        $scope.divide = function() {
            // evaluate equation
            var evaluate = function() {
                return $scope.baseValue = $scope.x / $scope.y;
            };
            // set case for operation
            var operation = function() {
                return $scope.operation = "divide";
            };

            return {
                evaluate: evaluate,
                operation: operation
            };
        };

        // EQUALS EVALUATION SWITCH CASE ---------------------------------------
        //
        // uses a switch case to determine which function to use to evaluate
        // the x and y scope variables.
        $scope.equals = function() {
            switch ($scope.operation) {
                case "add":
                    $scope.add().evaluate();
                    break;
                case "subtract":
                    $scope.subtract().evaluate();
                    break;
                case "multiply":
                    $scope.multiply().evaluate();
                    break;
                case "divide":
                    $scope.divide().evaluate();
                    break;
            }
        };

    }]);
