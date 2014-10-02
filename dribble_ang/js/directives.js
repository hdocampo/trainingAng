var controllers = angular.module("shots.controllers");

controllers.directive('myThumbnail', function() {
    return {
    restrict: 'E',
    templateUrl: 'views/my-thumbnail.html'
  	};
});

controllers.directive('myAlert', function() {
    return {
    restrict: 'E',
    templateUrl: 'views/my-alert.html'
  	};
});