'use strict';

angular.module('recycleApp', ['ui.router'])

.config(['$stateProvider', '$urlRouteProvider', 
function($stateProvider, $urlRouteProvider) {
	$stateProvider

		.state('start', {
			url: '/',
			templateUrl: 'partials/start.html',
			controller: 'StartController'
		})

		.state('map', {
			url: '/map',
			templateUrl: 'partials/map.html',
			controller: 'MapController'
		})

		.state('profile', {
			url: '/profile',
			templateUrl: 'partials/profile.html',
			controller: 'ProfileController'
		})

		.state('recycling', {
			url: '/recycling',
			templateUrl: 'partials/recycling.html',
			controller: 'RecyclingController'
		})

		.state('login', {
			url: '/logim',
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		})

		.state('tips-tricks', {
			url: '/tips-tricks',
			templateUrl: 'partials/tips-tricks.html',
			controller: 'TipsTricksController'
		})
}]);