var controllers = angular.module("shots.controllers", []);

controllers.controller("shotsCtrl", function ($http, $scope, shotsApi, $routeParams) {

	$scope.notfound = false;
	$scope.alert = false;
	
	$scope.toggleFound = function(){
		$scope.notfound  = !$scope.notfound;
	}

	shotsApi.getShots().then(function (data) {
		$scope.list = data;
	}, function () {
		$scope.notfound = true;
		$scope.alert = true;
	});

});