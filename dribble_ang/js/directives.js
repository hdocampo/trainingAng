var controllers = angular.module("shotsController");

controllers.directive('myThumbnail', function() {
    return {
    restrict: 'E',
    templateUrl: 'views/my-thumbnail.html'
  	};
});

controllers.directive('alert', function() {
    return {
    restrict: 'E',
    templateUrl: 'views/alert.html'
  	};
});