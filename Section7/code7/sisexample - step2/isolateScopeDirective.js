(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScope', function () {
    return {
		//isolating the scope 
	  scope:{},
      template: 'Name: {{customer.name}} Street: {{customer.street}}'
    };
  });

}());