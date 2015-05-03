angular.module('routerApp')
	.controller('GlobalController',["$scope", "$http", function($scope, $http){
		
		console.log('Loading GlobalController ...');
		
		$scope.searchTerm ='';
		$scope.isLogged = false;

	}]);