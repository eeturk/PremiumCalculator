var app = angular.module('calculateApp', []);

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

app.controller('HomeController', function ($scope) {

    $scope.dovalidation = false;

    $scope.occupationList = [
        {
            occupation: "Cleaner", rating: "Light Manual"
        },
        {
            occupation: "Doctor", rating: "Professional"
        },
        {
            occupation: "Author", rating: "White Collar"
        },
        {
            occupation: "Farmer", rating: "Heavy Manual"
        },
        {
            occupation: "Mechanic", rating: "Heavy Manual"
        },
        {
            occupation: "Florist", "rating": "Light Manual"
        }
    ];

    $scope.findRatingFactor = function () {
        var ratingFactor = { "Professional": 1.0, "White Collar": 1.25, "Light Manual": 1.5, "Heavy Manual": 1.75 };
        $scope.factor = ratingFactor[$scope.Premium.Occupation];           
    };

    $scope.DoCalculation = function (premium) {
        $scope.dovalidation = true;
        if ($scope.frmCalculate.$valid) {
            $scope.output = (premium.SumInsured * $scope.factor * premium.Age) / (1000 * 12);
            $("#divOutput").removeClass("hidden");
            $scope.dovalidation = false;
        }
    };

    $scope.resetForm = function () {     
        $scope.Premium = {};
        $("#divOutput").val();
        $("#divOutput").addClass("hidden");          
        $scope.dovalidation = false;
    };
});