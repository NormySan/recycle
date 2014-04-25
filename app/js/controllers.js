'use strict';

angular.module('recycleApp')

.controller('StartController', ['$http', function($http) {

  var apiUrl = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes',
      apiKey = '599166e13dca4477b926829f48e32f5b';

  $http.jsonp(apiUrl + '/79d60aee-718e-48ea-bdfa-cca9239ec3bf/DetailedServiceUnits/json', { params: { apikey: apiKey } }).success(function(response) {
    console.log(response);
  });
}])

.controller('MapController', [function() {

}])

.controller('ProfileController', [function() {

}])

.controller('RecyclingController', [function() {

}])

.controller('LoginController', [function() {

}])

.controller('TipsTricksController', [function() {

}]);