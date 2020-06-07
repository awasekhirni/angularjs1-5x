function CarHireController($scope, $http) {

    $http.get('carhire.json').success(function(data) {
        $scope.results = data.results;
    }).error(function(data, status, headers, config) {
	console.log('error');
  });
  
  $scope.filterCarType = function() {
    //$scope.counter++;
	console.log('car type filter');
  };

}