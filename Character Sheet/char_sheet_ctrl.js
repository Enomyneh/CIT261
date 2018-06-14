var app = angular.module('myApp', []);
app.controller('CharacterController', ['$scope', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.character = {
        name: "Myrryn Galnir",
        class: "Cleric",
        hit_die_type: 8,
        level: 5,
        ability_score_strength: 15,
        ability_score_dexterity: 9,
        ability_score_constitution: 17,
        ability_score_intelligence: 15,
        ability_score_wisdom: 20,
        ability_score_charisma: 14,
        armor_class: 18,
        speed: 25,
        hp: 47,
        prof_bonus: 3
    };

    $scope.calcAbilityMod = function (ability_score) {
        score = parseInt(ability_score);
        return Math.floor((score - 10) / 2);
    }
}]);