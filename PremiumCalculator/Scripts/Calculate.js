

angular.module('calculateApp', []).controller('HomeController', function ($scope) {

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
        
        if ($scope.frmCalculate.$valid) {
            $scope.output = (premium.SumInsured * $scope.factor * premium.Age) / (1000 * 12);
            $("#divOutput").removeClass("hidden");
        }
        else {
            alert("Please check your inputs");
        }

    };

    $scope.resetForm = function () {     
        $scope.Premium = {};
        $("#divOutput").val();
        $("#divOutput").addClass("hidden");
    };
});