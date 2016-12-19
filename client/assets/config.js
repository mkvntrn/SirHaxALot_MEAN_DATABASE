var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "partials/main.html", 
		controller: "mainController"
	})
	.otherwise({
		redirectTo: '/'
	})
})