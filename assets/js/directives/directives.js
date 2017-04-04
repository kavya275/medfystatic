angular.module('medfyApp.directives', [])
.directive('homenav', function ($timeout) {
        return {
            restrict: 'AEC',
            scope: {
					
            },
            link: function (scope, element, attrs) {
					
            },
            templateUrl: 'directives/homenav.html',
            
        };

    })
.directive('profileinfo', function ($timeout) {
        return {
            restrict: 'AEC',
            scope: {
                    
            },
            link: function (scope, element, attrs) {
                    
            },
            templateUrl: 'directives/profileinfo.html',
            
        };

    })
.directive('submenu', function ($timeout) {
        return {
            restrict: 'AEC',
            scope: {
                    
            },
            link: function (scope, element, attrs) {
                    
            },
            templateUrl: 'directives/submenu.html',
            
        };

    })
.directive('menubar', function ($timeout) {
        return {
            restrict: 'AEC',
            scope: {
                    
            },
            link: function (scope, element, attrs) {
                    
            },
            templateUrl: 'directives/menubar.html',
            
        };

    })
 
 .directive('footer', function ($timeout) {
        return {
            restrict: 'AEC',
            scope: {
                    
            },
            link: function (scope, element, attrs) {
                    
            },
            templateUrl: 'directives/footer.html'
        };

    })
    .directive('onError', function() {
        return {
            restrict:'A',
            link: function(scope, element, attr) {
                element.on('error', function() {
                    element.attr('src', attr.onError);
                })
            }
        }
    })
    