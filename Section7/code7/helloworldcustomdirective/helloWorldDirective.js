(function(){
	

var app = angular.module('directivesModule',[]);

app.directive('helloWorld', function(){
	
	//directive definition object DDO
	return{
	template: 'Hello World'

	};


});



}());