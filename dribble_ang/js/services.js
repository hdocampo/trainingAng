'use strict';

var services = angular.module('dabbble.services', []);

angular.module('dabbble.services').factory('dribbble', function ($http) {
   return {
   	getShots: function () {
   		return $http.get("https://api.dribbble.com/v1/shots?access_token=dfe95ac4ba457e05fa0e16e58fb13cd821a01120e4f93befa09784839e9e7dbb").then(function(response) {
   			return response.data;
   		});
   	},
   	deleteShot: function (id) {
   		// code;
   	}
   };
});