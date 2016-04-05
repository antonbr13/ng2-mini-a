angular.module('myApp')

.controller('mainCtrl', function($scope, myService) {

   $scope.test = 'my name is...';

   $scope.artists = myService.getUsers();



});
