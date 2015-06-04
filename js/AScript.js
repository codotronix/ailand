/****** The Main App *************/
var mainApp = angular.module('mainApp', ['ngRoute']);

/*** The Shared Service ***/
mainApp.service('sharedVars', function () {
   var sharedVars = {};
   sharedVars.currentPage = 'index';
   return sharedVars;
});

/****** The Main Controller *****/
mainApp.controller('mainCtrl', ['$scope', function ($scope) {
	$scope.topMenu = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4', 'Menu Item 5', 'Menu Item 6'];
   $scope.leftMenu = ['Side Item 1', 'Side Item 2', 'Side Item 3', 'Side Item 4', 'Side Item 5', 'Side Item 6'];
   
}]);

/****** lets do the routing ***********/
mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/login', {
                  templateUrl: 'template/login.html',
                  controller: 'loginCtrl'
               })
               .when('/friends', {
                  templateUrl: 'template/people.html',
                  controller: 'peopleCtrl'
               })
               .when('/', {
               		redirectTo: '/login'
               })
               .otherwise({
               		redirectTo: '/'
               });
         }]);

/***** Routing Controllers ***********/
mainApp.controller('peopleCtrl', ['$scope', function ($scope) {
   $('body').removeClass().addClass('generalPage');
	$scope.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12'];
   
}]);

/***** Login Controller *************/
mainApp.controller('loginCtrl', ['$scope', function ($scope) {
   $('body').removeClass().addClass('loginPage');
}]);

