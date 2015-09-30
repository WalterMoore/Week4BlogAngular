//Logic for page actions here. 

var app = angular.module('myApp.controllers', ['ngRoute']);

app.controller('SampleController', ['$scope', function($scope){
	
}]);



// var app = angular.module('myApp', ['ngRoute']);
// 	app.controller('MyController', ['$scope', function($scope){

// 	}]);
	
// 	app.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {
// 		$scope.continueToNext = function() {
// 			$location.path('/tweets');
// 		};
// 	}]);
	
// 	app.controller('TweetsController', ['$scope', '$http', function($scope, $http) {
// 		$scope.name = '';
// 		$scope.twit = '';
// 		$scope.tweets = [];


//Use to instantiate app, connect factory & controllers and configure app.

		// $scope.submitTweet = function() {
		// 	//push to array, make spaces blank
		// 	console.log('inside submitTweet!');
		// 	var tweet = {
		// 		text: $scope.twit,
		// 		user: $scope.name,
		// 		date: new Date()
		// 	};
		// 	$http.post('/messages', tweet)
	// 	// 		.success(function() {
	// 	// 			$scope.name = '';
	// 	// 			$scope.twit = '';
	// 	// 			$scope.tweets.unshift(tweet);

	// 			})
	// 			.error(function(err) {
	// 				console.error(err);
	// 			});
	// 	};
	
	// 	$http.get('/messages')
	// 		.success(function(tweets) {
	// 			console.log('got tweets');
	// 			console.log(tweets);
	// 		tweets.forEach(function(tweet) {
	// 		console.log('i am inside the forEach function');
	// 			$scope.tweets.unshift(tweet);
	// 			//^returns tweets in reverse order
	// 		})
	// 		})
	// 		.error(function(err) {
	// 			console.error(err);
	// 		});
		
	// }]);