angular.module('routerApp')
.controller('UserDetailsController', function($scope, $stateParams, $http,$window) {
  $scope.userId = $stateParams.userId;

	$http.get('https://api.github.com/users/'+$stateParams.userId).
  success(function(data, status, headers, config) {
    console.log('User='+ data);
    $scope.user = data;
  }).
  error(function(data, status, headers, config) {
    
  });

  $scope.goBack = function(){
  	
  	$window.history.back();
  }

});