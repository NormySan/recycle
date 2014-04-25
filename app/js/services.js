'use strict';

angular.module('recyleApp')

/**
 * Get recycle location data.
 */
.factory('LocationService', ['EnvironmentalStationService', 'RecycleStationService', function(EnvironmentalStationService, RecycleStationService) {

	return {
		all: function() {
			var locations = [];

			EnvironmentalStationService.then(function(response) {
				console.log(response);
			});
		}
	}

}])

/**
 * Get locations for environmental stations (Miljöstationer).
 * 
 * API ID: 79d60aee-718e-48ea-bdfa-cca9239ec3bf
 *
 * @param  {object} $http
 * @return {object}
 */
.factory('EnvironmentalStationService', ['$http', function($http) {
	var apiUrl = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes',
			apiKey = '599166e13dca4477b926829f48e32f5b';

	return {
		all: function() {
			return $http.jsonp(apiUrl + '/79d60aee-718e-48ea-bdfa-cca9239ec3bf/DetailedServiceUnits/json', { params: { apikey: apiKey } });
		}
	}
}])

/**
 * Get locations for recycle stations.
 *
 * API ID: ac4854fb-fba3-4d01-83ce-ff7992310846
 * 
 * @param  {object} $http
 * @return {object}
 */
.factory('RecycleStationService', ['$http', function($http) {
	var apiUrl = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes',
			apiKey = '599166e13dca4477b926829f48e32f5b';

	return {
		all: function() {
			return $http.jsonp(apiUrl + '/ac4854fb-fba3-4d01-83ce-ff7992310846/DetailedServiceUnits/json', { params: { apikey: apiKey } });
		}
	}
}]);