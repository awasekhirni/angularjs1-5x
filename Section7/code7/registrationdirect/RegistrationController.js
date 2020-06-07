
(function() {
   
    var app = angular.module('directivesModule', []);

    var injectParams = ['$scope'];

    var UsersController = function ($scope) {
        var counter = 0;
        $scope.tasks = [{ title: 'Task 1' }];
        $scope.user = {
            firstname: 'Awase Khirni',
            lastname: 'Syed',
            email: 'awasekhirni@gmail.com',
            password: 'hulahoop'
        };
        
        $scope.users = [
            {
                firstname: 'Awase Khirni',
            	lastname: 'Syed',
            	email: 'awasekhirni@gmail.com',
            	password: 'hulahoop'
            },
            {
                firstname: 'Awase Khirni',
            	lastname: 'Syed',
            	email: 'awasekhirni@gmail.com',
            	password: 'hulahoop'
            },
            {
                firstname: 'Awase Khirni',
            	lastname: 'Syed',
            	email: 'awasekhirni@gmail.com',
            	password: 'hulahoop'
            },
            {
                firstname: 'Awase Khirni',
            	lastname: 'Syed',
            	email: 'awasekhirni@gmail.com',
            	password: 'hulahoop'
            }
        ];

        $scope.addUser = function (name) {
            console.log(name);
            counter++;
            $scope.users.push({
                name: (name) ? name : 'New Customer' + counter,
                street: counter + ' Cedar Point St.',
                age: counter
            });
        };

        $scope.changeData = function () {
            counter++;
            $scope.user = {
                name: 'James',
                street: counter + ' Cedar Point St.'
            };
        };
    };

    CustomersController.$inject = injectParams;

    app.controller('CustomersController', CustomersController);

}());