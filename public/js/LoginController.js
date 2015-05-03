angular.module('routerApp')
.controller('LoginController', ["$scope","$state","Authentication", function($scope,$state,Authentication) {
	
	console.log('Loading LoginController ...');
	$scope.$parent.isLogged = false;

	$scope.login = function(){
		$scope.$parent.isLogged = true;
		Authentication.login();
		$state.go('home');
	}
}]);