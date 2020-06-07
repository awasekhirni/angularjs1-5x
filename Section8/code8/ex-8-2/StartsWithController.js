(function() {
   
    var app = angular.module('directivesModule', []);

   app.controller("StartsWithController", ['$scope', function ($scope) {
    $scope.myName = "Syed Awase Khirni";
    $scope.employeeArray = [
    { name: 'Tejas' },
    { name: 'Jignesh' },
    { name: 'Rakesh' },
    { name: 'Niranjan' },
    { name: 'Joe' },
    { name: 'Valor' },
    { name: 'Jignesh' },
    { name: 'Rakesh' },
    { name: 'Nirav' },
    { name: 'Jiten' },
    { name: 'Varun' },
    { name: 'Jignesh' },
    { name: 'Rakesh' },
    { name: 'Nirav' },
    { name: 'Jiten' },
    { name: 'Varun' },
    { name: 'Jignesh' },
    { name: 'Rakesh' },
    { name: 'Nirav' },
    { name: 'Jiten' },
    { name: 'Varun' },
    { name: 'Chirag' }
    ];
    $scope.empName = "j";
}]);

   app.controller('StartsWithController', StartsWithController);

}());