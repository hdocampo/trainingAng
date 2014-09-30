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

	app.controller("SubmitController", function (){
		this.countryData = {};
		this.addCountry = function () {

			this.countryData = {
				name: this.name,
				shortcode: this.shortcode,
				enabled: true
			}

			countriesList.push(this.countryData);
			this.countryData = {};

			console.table(countriesList);
		}

	})


})();

