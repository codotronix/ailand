/****** The Main App *************/
var mainApp = angular.module('mainApp', ['ngRoute']);

/****** The Main Controlelr *****/
mainApp.controller('mainCtrl', ['$scope', function ($scope) {
	$scope.topMenu = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4', 'Menu Item 5', 'Menu Item 6'];
   $scope.leftMenu = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4', 'Menu Item 5', 'Menu Item 6'];
}]);

/****** lets do the routing ***********/
mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/friends', {
                  templateUrl: 'template/people.html',
                  controller: 'peopleCtrl'
               })
               .when('/', {
               		redirectTo: '/friends'
               })
               .otherwise({
               		redirectTo: '/'
               });
         }]);

/***** Routing Controllers ***********/
mainApp.controller('peopleCtrl', ['$scope', function ($scope) {
	$scope.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12'];
}]);