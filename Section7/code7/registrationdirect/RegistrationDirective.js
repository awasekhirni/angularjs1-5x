(function() {

  var app = angular.module('directivesModule');

  app.directive('registerControlz', function () {
      return {
          restrict: 'EA',
          scope: {
              datasource: '=',
              click: '&'
          },
          template: 'Name: {{datasource.name}} Street: {{datasource.street}}'+
                '<br/><button ng-click="datasource.name=\'Fred\'">'+
                'Change</button>'
      };
  });

}());