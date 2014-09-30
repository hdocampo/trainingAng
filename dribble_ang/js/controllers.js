var controllers = angular.module("shotsController", []);

controllers.controller("shotsController", function ($http, $scope) {
	
	// $scope.list = {};
	//$http.get("http://api.dribbble.com/shots/popular")
	//
	//

	$http.get("dribbleapi.json")
	.catch(function(){
		$scope.noPlaylist = !$scope.noPlaylist;
	})
	.then( function (data) {
		// $scope.playlistFull = data.data.playlist;
		 $scope.list = data.data;
		 console.log(data);
	});

	
});

controllers.controller("nameOfController", function ($scope){
	$scope.list;

})