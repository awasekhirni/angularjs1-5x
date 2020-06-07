(function() {

    angular
        .module("plunker", [])
        .controller("MainController", MainController);

    MainController.$inject = ["$scope","$http"];

    function MainController($scope,$http) {
        var onUserComplete = function(response){
              $scope.user = response.data;
              $http.get($scope.user.repos_url)
                .then(onRepos, onError);
            };

            var onRepos = function(response){
              $scope.repos = response.data;
            };

            var onError = function(reason){
              $scope.error= "could not fetch data from github service";
            };

            $scope.search = function(username){
              $http.get("https://api.github.com/users/"+ username)
                .then(onUserComplete, onError);
            };

            $scope.username= "angular";
            $scope.message="Github Viewer";
            // - implies descending sort order in filters
            //+ implies ascending sort order in filters
            $scope.repoSortOrder="-stargazers_count";
    };

})();
