define(['directives/directives'], function(directives){
	directives.directive('myFocus', [function(){
		return {
			restrict: 'A',
			scope: false,
			link: function(scope, element, attrs){
				element[0].focus();
			}
		}
	}])
});
