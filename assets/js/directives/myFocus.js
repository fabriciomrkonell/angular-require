define(['directives/directives'], function(directives){
	directives.directive('myFocus', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			scope: false,
			link: function(scope, element, attrs){
				element[0].focus();
			}
		}
	}])
});