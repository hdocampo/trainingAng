'use strict';

var services = angular.module('shots.services', []);

services.factory('shotsApi', function ($http) {

	function load_API_dribble (path, params){
   		var params = params || {};
   		return $http.get("https://api.dribbble.com/v1/"+path+"&access_token=dfe95ac4ba457e05fa0e16e58fb13cd821a01120e4f93befa09784839e9e7dbb").then(function(response) {
   			return response.data;
   		});
	}

   return {
	   	getShots: function (type) {
			return load_API_dribble("shots?list=" + type);
	   	},
	   	showShot: function (id) {
	   		return load_API_dribble("shots/" + id + "?");
	   	}
   };
});