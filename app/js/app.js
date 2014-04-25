'use strict';

angular.module('recyleApp', ['ui.router'])

.config(['$stateProvider', '$urlRouteProvider', 
function($stateProvider, $urlRouteProvider) {
	$stateProvider

		.state('start', {
			templateUrl: 'partials/start.html'
		})

		.state('map', {
			templateUrl: 'partials/map.html'
		})

		.state('start', {
			templateUrl: 'partials/start.html'
		})
}]);