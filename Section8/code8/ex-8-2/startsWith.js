//immediately invoked function expression
(function(){
	
// to initialize ng-app
var app = angular.module('directivesModule',[]);

app.filter('startsWith', function () {
    return function (items, char) {
        var filtered = [];
        var match = new RegExp(char, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (match.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

}());

