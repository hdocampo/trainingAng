var controllers = angular.module("shots.controllers", []);

controllers.controller("shotsCtrl", function ($scope, shotsApi, $routeParams) {

	var paramList = $routeParams.list;
	$scope.pageClass;

	$scope.notfound = false;
	$scope.alert = false;
	
	$scope.toggleFound = function(){
		$scope.notfound  = !$scope.notfound;
	}

	shotsApi.getShots( paramList ).then(function (data) {
		$scope.list = data;
		$scope.pageClass = "page-list";
	}, function () {
		$scope.notfound = true;
		$scope.alert = true;
	});

});

controllers.controller("shotsSingleCtrl", function ($scope, shotsApi, $routeParams) {

	var paramShot = $routeParams.id;
	
	shotsApi.showShot( paramShot ).then(function (data) {
		$scope.shot = data;
		$scope.pageClass = "page-shot";

	}, function () {
		$scope.notfound = true;
		$scope.alert = true;
	});

});