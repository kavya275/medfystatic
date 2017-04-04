angular.module('medfyApp', ['ui.router',
    'medfyApp.controllers',
    'medfyApp.services',
     'medfyApp.directives',
    'ngStorage','ui.materialize' ])

//.constant('BASE_URL_HREF', 'http://lensnmirror.com/demo/mvp1/#/')
.constant('BASE_URL_HREF', 'http://localhost/lens-n-mirror-mvp1/#/')
.constant('BASE_API_URL', 'http://139.59.8.194:8080/')


.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller:'homeCtrl'
            })
             .state('viewhistory', {
                url: '/viewhistory',
                templateUrl: 'views/viewhistory.html',
            })
              .state('loginsignup', {
                url: '/loginsignup',
                templateUrl: 'views/loginsignup.html',
            })
              .state('myform', {
                url: '/myform',
                templateUrl: 'views/myform.html',
            })
               .state('profileedit', {
                url: '/profileedit',
                templateUrl: 'views/profileedit.html',
            })
               .state('addmember', {
                url: '/addmember',
                templateUrl: 'views/addmember.html',
            })
               .state('existingmember', {
                url: '/existingmember',
                templateUrl: 'views/existingmember.html',
            })
              .state('viewotherhistory', {
                url: '/viewotherhistory',
                templateUrl: 'views/viewotherhistory.html',
            })
           
 $urlRouterProvider.otherwise('/');
    });

