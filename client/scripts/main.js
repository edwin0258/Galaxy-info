var app = angular.module("galaxyApp", []);

app.controller("mainController", function($scope){
    $scope.items = galaxies; 
})

var galaxies = [
    // temp galaxies
    {name: "andromeda", location: "Perseus"},
    {name: "spiral", location: "Perseus"},
    {name: "box", location: "Perseus"},
    {name: "C3213", location: "Perseus"}
]

