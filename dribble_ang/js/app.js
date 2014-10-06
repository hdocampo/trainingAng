(function(){

	var app = angular.module("shots", ["shots.controllers", "shots.services", "ngRoute", "ngAnimate"]);

	app.config( function ($routeProvider){
		$routeProvider
		.when("/:list", {controller: "shotsCtrl", templateUrl: "views/shots_list.html"})
		.when("/shot/:id", {controller: "shotsSingleCtrl", templateUrl: "views/shot.html"})
		.when("/p/404", {controller: "shotsCtrl", templateUrl: "views/404.html"})
		.otherwise({ redirectTo: "/popular"});
	});

})();

