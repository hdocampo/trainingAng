var controllers = angular.module("shotsController", []);

controllers.controller("shotsController", function ($http, $scope, dribbble) {

	$scope.notfound = false;
	$scope.alert = false;
	
	$scope.toggleFound = function(){
		$scope.notfound  = !$scope.notfound;
	}

	dribbble.getShots().then(function (data) {
		$scope.list = data;
	}, function () {
		$scope.notfound = true;
		$scope.alert = true;
	});
});