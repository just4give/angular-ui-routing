angular
	.module('routerApp',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        .state('login', {
            url: '/login',
            templateUrl: 'views/templates/login.html',
            controller: 'LoginController'
        })
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/templates/partial-home.html',
            controller: 'HomeController'
        })
        
        // nested list with custom controller
        .state('user', {
            url: '/user/:userId',
            templateUrl: 'views/templates/partial-user-detail.html',
            controller:'UserDetailsController'
            
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
             '': {	templateUrl: 'views/templates/partial-about.html' },
              'columnOne@about': { templateUrl: 'views/templates/partial-contact.html' },
              'columnTwo@about': { templateUrl: 'views/templates/partial-map.html' ,
					controller:'AboutController' }
			}
           
            
        });
        
})
// In the run phase of your Angular application  
.run(function($rootScope, $state, Authentication) {

  // Listen to '$locationChangeSuccess', not '$stateChangeStart'
  $rootScope.$on('$locationChangeSuccess', function() {
    var user = Authentication.getUserInfo();
    console.log('USer = ' + JSON.stringify(user));
    if(!user.authnticated){
        $state.go('login');
    }
  })
})
.factory("Authentication", ["$http", function ($http) {
    var userInfo={};

    function login() {
        userInfo.authnticated = true;
    }
    function getUserInfo() {
        return userInfo;
    }
    return {
        login: login,
        getUserInfo: getUserInfo
    };
}]);


