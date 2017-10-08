var app = angular.module('myDemo',[]);

app.controller('LogController',['$scope','$http',function($scope,$http){
	var txt = "<h1>Hello world!</h1>";

	$scope.result=txt;
}]);