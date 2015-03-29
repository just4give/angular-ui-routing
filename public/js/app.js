angular
	.module('routerApp',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
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
        
});


