(function(){

	var app = angular.module("shots", ["shots.controllers", "shots.services", "ngRoute"]);

	app.config( function ($routeProvider){
		$routeProvider
		.when("/shots/:list", {controller: "shotsCtrl", templateUrl: "views/shots_list.html"})
		.when("/404", {controller: "shotsCtrl", templateUrl: "views/404.html"})
		.otherwise("/404");
	});

})();

