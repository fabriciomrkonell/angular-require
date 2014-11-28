define([
	'angular',
	'angularRoute',
	'controllers/controllers',
	'constants/constants',
	'directives/directives'
	], function(angular){
		return angular.module('app', ['ngRoute', 'controllers', 'constants', 'directives'])
	});