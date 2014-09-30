(function(){

	var countriesList = [
		{ name: "Uruguay", shortcode: "UY", enabled: true }, 
		{ name: "Argentina", shortcode: "AR", enabled: false }, 
		{ name: "Brasil", shortcode: "BR", enabled: true }
	]; 

	var app = angular.module("myAppModule", []);

	app.controller("countryController", function () {
		this.countries = countriesList;
	});

	app.controller("countrySubmit", function (){
		this.ctry = {};
		this.addCtry = function () {

			this.ctry = {
				name: this.name,
				shortcode: this.shortcode,
				enabled: true
			}

			countriesList.push(this.ctry);
			this.ctry = {};

			console.table(countriesList);
		}

	})


})();

