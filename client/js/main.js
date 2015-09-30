

var app = angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services']);




app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller:"",
			templateUrl: "../views/blogposts.html"
		})
		.when('/newpost', {
			controller: "",
			templateUrl: "../views/newpost.html"
		})
		.otherwise({
			redirectTo: '/'
		});
});

	// app.config(function($routeProvider){
	// 	$routeProvider
	// 		.when('/', {
	// 			controller: "WelcomeController",
	// 			templateUrl: "views/welcome.html"
	// 		})
	// 		.when('/tweets', {
	// 			controller: "TweetsController",
	// 			templateUrl: "views/tweets.html"
	// 		})
	// 		.otherwise({
	// 			redirectTo: '/'
	// 		});	
	// });


