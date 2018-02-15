
myApp.controller('SessionController', ['$scope', '$location', '$cookies', function($scope, $location, $cookies){
   $scope.sessionUser = $cookies.getObject('thisUser');
   $scope.user = '';
   $scope.alerts = [];

   // login (create) new session user
   $scope.login = function(){
       alerts = [];
       if (!$scope.sessionUser){
           if ($scope.user.length < 1){
               alerts.push('Please enter a user name to continue');
               $scope.alerts = alerts;
           }
           else{
               $location.url('/dashboard');
               $cookies.putObject('thisUser', $scope.user);
           }
       }
       else{
           $location.url('/dashboard');
       }
   }


   // log out function removes cookies
   $scope.logout = function(){
       $cookies.remove('thisUser');
       $location.url('/');
   }


   // keeps user from navigating to pages w/o entering a username
   $scope.checkCookies = function(){
       // console.log($location.$$path);
       // console.log($scope.sessionUser);
       if (!$scope.sessionUser){
           if ($location.$$path === '/login'){
                   $location.url('/login');
           } else{
               $location.url('/');
           }
       }
   }
   $scope.checkCookies();


}]) // close SessionController
