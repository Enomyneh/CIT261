var app = angular.module('DiceRoller', []);
app.controller('DiceCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.result = null;
    $scope.mod = 0;
    $scope.output_label = "1d20";

    $scope.rollDie = function (die) {
        console.log("Rolling 1d" + die.toString());
        return Math.floor(Math.random() * die) + 1;
    };

    $scope.roll = function (count, die, mod) {
        let output = 0;
        for (i = 0; i < count; i++) {
            output += $scope.rollDie(die);
        }
        output += mod;

        $scope.output = output;
        console.log("Output:", $scope.output);
    }

    $scope.init = function () {
        console.log("Init()");
        $scope.dieType = "";
        $scope.mod = 0;
        $scope.dieCount = 1;
        $scope.dice = [
            {name: "d4", value: "4"},
            {name: "d6", value: "6"},
            {name: "d8", value: "8"},
            {name: "d10", value: "10"},
            {name: "d12", value: "12"},
            {name: "d20", value: "20"},
            {name: "d100", value: "100"}
        ];
        $scope.dieType = $scope.dice[5].value;
        console.log("dieType", $scope.dieType);
    };
}]);