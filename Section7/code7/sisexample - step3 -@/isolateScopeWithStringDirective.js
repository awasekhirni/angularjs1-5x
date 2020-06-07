(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithString', function () {
      return {
          scope: {
              name: '@' //one-way data binding
          },
          template: 'Name: {{name}}'
      };
  });

}());