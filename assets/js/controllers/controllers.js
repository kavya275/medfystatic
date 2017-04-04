angular.module('medfyApp.controllers', [
    'medfyApp.services',
    'medfyApp.directives'
])
.controller('homeCtrl', function($scope, $stateParams, $state,urls,$http) {
    console.log('hai...........');
    $scope.href=$scope.apiUrl;
    console.log($scope.href)
   
})

