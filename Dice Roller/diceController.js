var app = angular.module('DiceRoller', []);
app.controller('DiceCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.result = null;
    $scope.mod = 0;
    $scope.dieType = "";
    $scope.dice = [
        {name: "d4", value: "4"},
        {name: "d6", value: "6"},
        {name: "d8", value: "8"},
        {name: "d10", value: "10"},
        {name: "d12", value: "12"},
        {name: "d20", value: "20"},
        {name: "d100", value: "100"}
    ];

    $scope.rollDie = function (die) {
        return Math.floor(Math.random() * die) + 1;
    };

    $scope.init = function () {
        $scope.dieType = $scope.dice[0].value;
    };
}]);