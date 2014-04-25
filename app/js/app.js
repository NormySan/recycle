'use strict';

angular.module('recyleApp', ['ui.router'])

.config(['$stateProvider', '$urlRouteProvider', 
function($stateProvider, $urlRouteProvider) {
	$stateProvider

		.state('start', {
			templateUrl: 'partials/start.html',
			controller: 'StartController'
		})

		.state('map', {
			templateUrl: 'partials/map.html'
			controller: 'MapController'
		})

		.state('profile', {
			templateUrl: 'partials/profile.html'
			controller: 'ProfileController'
		})

		.state('recycling', {
			templateUrl: 'partials/recycling.html'
			controller: 'RecyclingController'
		})

		.state('login', {
			templateUrl: 'partials/login.html'
			controller: 'LoginController'
		})

		.state('tips-tricks', {
			templateUrl: 'partials/tips-tricks.html'
			controller: 'TipsTricksController'
		})
}]);