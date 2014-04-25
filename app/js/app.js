'use strict';

angular.module('recycleApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

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
		});

	// Go to this route when nothing else is defined.
	$urlRouterProvider.otherwise('/');

		// Set HTML5 routing to true, this will remove the hashbang # from the url.
  	$locationProvider.html5Mode(true);
}]);