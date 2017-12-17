

myApp.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '../partials/index.html',
        controller: 'UsersController',
    })
    .when('/dashboard', {
        templateUrl: '../partials/dashboard.html',
        controller: 'UsersController',
    })
    .otherwise({
        redirectTo: '/login',
    })
}); // close
