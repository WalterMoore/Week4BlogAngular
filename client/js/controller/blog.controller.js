//Logic for page actions here. 

var app = angular.module('myBlogApp.controllers', ['ngRoute']);

app.controller('WelcomeController', ['$scope', 'WalterBlogAngular', function($scope, WalterBlogAngular){
	$scope.posts = [];
	WalterBlogAngular.getItems().then(function(blogPosts) {
		blogPosts.forEach(function(post) {
			$scope.posts.unshift(post);
		});
		// for (var i = 0; i < blogPosts.length; i++ ){
		// 	$scope.posts.push(blogPosts[i]);
		// }
	});
}]);

	app.controller('PostController', ['$scope', 'WalterBlogAngular', function($scope, WalterBlogAngular) {
		//$scope.name = '';
		$scope.post = '';
		$scope.posts = [];
		
		$scope.submitPost = function() {
			//push to array, make spaces blank
			console.log('inside submitPost!');
			var post = {
				text: $scope.post,
				//user: $scope.name,
				date: new Date()
			};
		WalterBlogAngular.getItems()
			.then(function(items) {
				
			});
			
		WalterBlogAngular.postItem()
			.then(function(items) {
				
			});
		}
		
	}]);
