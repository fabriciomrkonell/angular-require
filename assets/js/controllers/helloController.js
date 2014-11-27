define(['controllers/controllers'], function(controllers){
	controllers.controller('HelloCtrl', ['$scope', function($scope){

		angular.extend($scope, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, voluptatum. Provident accusamus sit, commodi corrupti illo, veniam possimus minima rerum itaque. Magni, beatae, facere.'
		});

	}]);
});