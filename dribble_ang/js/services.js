'use strict';

var services = angular.module('shots.services', []);

services.factory('shotsApi', function ($http) {
   return {
   	getShots: function (type) {
   		return $http.get("https://api.dribbble.com/v1/shots?list="+type+"&access_token=dfe95ac4ba457e05fa0e16e58fb13cd821a01120e4f93befa09784839e9e7dbb").then(function(response) {
   			return response.data;
   		});
   	},
   	showShot: function (id) {
   		return $http.get("https://api.dribbble.com/v1/shots/"+id+"?access_token=dfe95ac4ba457e05fa0e16e58fb13cd821a01120e4f93befa09784839e9e7dbb").then(function(response) {
   		return response.data;
   		});
   	}
   };
});