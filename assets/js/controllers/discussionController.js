define(['controllers/controllers'], function(controllers){
	controllers.controller('DiscussionCtrl', ['$scope', function($scope){

		angular.extend($scope, {
			discussion: [
				'Hello, World', 'Bye, World', 'BlogMV', 'AngularJS'
			]
		});

	}]);
});