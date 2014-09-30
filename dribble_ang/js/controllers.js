var controllers = angular.module("shotsController", []);

controllers.controller("shotsController", function ($http, $scope) {

	$scope.notfound = false;
	
	$http.get("https://api.dribbble.com/v1/shots?access_token=dfe95ac4ba457e05fa0e16e58fb13cd821a01120e4f93befa09784839e9e7dbb")
	
	.catch(function(){
		$scope.notfound = true;
	})
	.then( function (data) {
		
		 $scope.list = data.data;
		 console.log(data);
		 
		 /* var shotsReceived = $scope.list.length;
		 for(var i = 0; i < shotsReceived; i++){
		 	console.log( $scope.list[i] );
		 } */

	});

	
});