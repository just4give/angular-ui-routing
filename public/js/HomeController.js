angular.module('routerApp')
	.controller('HomeController',["$scope", "$http", function($scope, $http){

		console.log('Loading HomeController ...');
		$scope.resultCount = 0;
		$scope.userList = [];
		$scope.showPagination = false;
		$scope.showError =false;

		

		$scope.searchUsers = function(){
			$scope.showPagination = true;
			var pageNumber =  $scope.currentPage +1 ;
			$scope.$parent.searchTerm = $scope.searchText;
			console.log('page=' +  pageNumber + ' and search text=' +$scope.searchText);
			$http.get('https://api.github.com/search/users?page='+pageNumber+'&per_page='+$scope.itemsPerPage+'&q='+$scope.searchText ).
			  success(function(data, status, headers, config) {
			    
			    $scope.userList = data.items;
			    $scope.resultCount = data.total_count;
			    $scope.showError =false;
			  }).
			  error(function(err, status, headers, config) {
			  	console.log(err.message);
			  	$scope.showError =true;
			    $scope.errorMgs = err.message;
			  });
		}

		$scope.searchUsersNew = function(){
			 $scope.currentPage = 0;
			 $scope.searchUsers();
		}

		// Initial loading
		if($scope.$parent.searchTerm && $scope.$parent.searchTerm !=''){
			$scope.searchText = $scope.$parent.searchTerm ;
			$scope.searchUsersNew();
		}else{
		$http.get('https://api.github.com/users?page=1&per_page=30').
		  success(function(data, status, headers, config) {
		   
		    $scope.userList = data;
		    $scope.resultCount = data.length;
		    $scope.showError =false;
		  }).
		  error(function(err, status, headers, config) {
		    console.log(err.message);
		    $scope.showError =true;
		    $scope.errorMgs = err.message;
		  });
		}

  //pagination logic
  
  
  $scope.currentPage = 0;
  //$scope.pages = [{count: 5},{count: 10},{count: 20}];
  //$scope.selectedPerPage = $scope.pages[1];
  //$scope.itemsPerPage = $scope.selectedPerPage.count;
  $scope.itemsPerPage = 100;

  $scope.range = function() {
    var rangeSize = Math.ceil($scope.resultCount/$scope.itemsPerPage);
    var ret = [];
    var start;
	
    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }
    

    for (var i=start; i<start+rangeSize; i++) {
      ret.push(i);
    }
    return ret;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
      $scope.searchUsers();
    }
  };

  $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.resultCount/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
      $scope.searchUsers();
    }
  };

  $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
    $scope.searchUsers();
  };
  //end of paginition logic

	}]);