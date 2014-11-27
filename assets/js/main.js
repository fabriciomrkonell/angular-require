require.config({
	baseUrl: '/',
	paths: {
		angular: '../vendor/angular/angular.min',
		angularRoute: '../vendor/angular-route/angular-route.min',
		jquery: '../vendor/jquery/dist/jquery.min',
		domReady: '../vendor/requirejs-domready/domReady'
	},
	shim: {
		angular: {
			deps: [ 'jquery' ],
			exports: 'angular'
		},
		angularRoute: {
			deps: [ 'angular' ],
		}
	}
});

require([
	'angular',
	'app',
	'domReady',
	'controllers/homeController',
	'controllers/helloController',
	'controllers/discussionController',
	'directives/myFocus',
	'constants/title'
], function(angular, app, domReady){
	'use strict';
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'assets/views/home.html',
			controller: 'HomeCtrl'
		}).when('/hello', {
			templateUrl: 'assets/views/hello.html',
			controller: 'HelloCtrl'
		}).when('/discussion', {
			templateUrl: 'assets/views/discussion.html',
			controller: 'DiscussionCtrl'
		}).otherwise({ redirectTo: '/' });

	}]);
	domReady(function(){
		angular.bootstrap(document, ['app']);
	})
});