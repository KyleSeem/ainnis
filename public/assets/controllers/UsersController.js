// UsersController

myApp.controller('UsersController', ['$scope', 'userFactory', '$location', '$routeParams', '$cookies', function($scope, userFactory, $location, $routeParams, $cookies){
    $scope.sessionUser = $cookies.getObject('thisUser');
    $scope.user = {};
    $scope.newUser = {};
    $scope.alerts = [];
    $scope.alertType = '';


    // find all users
    $scope.index = function(){
        userFactory.index(function(response){
            console.log(response);
            $scope.users = response;
        });
    }



    // register (create) new user
    $scope.register = function(){
        alerts = [];
        $scope.alertType = '';

        if ($scope.newUser.confirm != $scope.newUser.password){
            alerts.push("Passwords do not match");
            $scope.alerts = alerts;
            $scope.alertType = 'reg';
        }
        else{
            userFactory.create($scope.newUser, function(response){
                if (response.alerts){
                    $scope.alerts = alerts;
                    $scope.alertType = 'reg';
                }
                else{
                    $location.url('/dashboard');
                    $cookies.putObject('thisUser', response);
                }
            });
        }
    }

    // login (find via form data)
    $scope.login = function(){
        alerts = [];
        $scope.alertType = '';

        if (!$scope.user.email | !$scope.user.password){
            alerts.push("Email or Password missing from login");
            $scope.alerts = alerts;
            $scope.alertType = 'log';
        }
        else{
            userFactory.find($scope.user, function(response){
                if (response.alert){
                    alerts.push(response.alert);
                    $scope.alerts = alerts;
                    $scope.alertType = 'log';
                }
                else{
                    // console.log('found this user:', response);
                    $location.url('/dashboard');
                    $cookies.putObject('thisUser', response);
                }
            });
        }
    }


    // show (find by id/routeParams)


    // delete user by id
    $scope.delete = function(id){
        userFactory.delete(id, function(response){
            $scope.index();
        });
    }

    // log out function removes cookies
    $scope.logout = function(){
        $cookies.remove('thisUser');
        $location.url('/');
    }

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




}]); // close UsersController
