define([
	'angular',
	'angularRoute',
	'controllers/controllers',
	'services/services',
	'constants/constants',
	'directives/directives'
	], function(angular){
		return angular.module('app', ['ngRoute', 'controllers', 'services', 'constants', 'directives'])
	});