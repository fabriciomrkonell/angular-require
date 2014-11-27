define(['controllers/controllers', 'constants/constants'], function(controllers){
	controllers.controller('HomeCtrl', ['$scope', 'title', function($scope, title){

		angular.extend($scope, {
			title: title.angular + ' and ' + title.require
		})

	}]);
});