var app = angular.module('myApp', []);
const baseurl = "http://www.omdbapi.com/?apikey=2d7646";

app.controller('MovieCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.testBtn = function () {
        console.log($scope.searchText);
    };

    $scope.search = function () {
        $http.get(baseurl + "&s=" + $scope.searchText)
            .then(function (result) {
                console.log(result.data.Search);
                $scope.movies = result.data.Search;
            })
            .catch(function (error) {
                console.error("Failed");
            });
    };

    $scope.showDetails = function (id) {
        console.log(id.toString());

        $http.get(baseurl + "&i=" + id)
            .then(function (result) {
                console.log(result.data);
                $scope.details = result.data;
            })
            .catch(function (error) {
                console.error("Failed");
            });
    }
}]);