

myApp.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '../partials/index.html',
        controller: 'SessionController',
    })
    .when('/dashboard', {
        templateUrl: '../partials/dashboard.html',
        controller: 'ProductsController',
    })
    .when('/results', {
        templateUrl: '../partials/results.html',
        controller: 'ProductsController',
    })
    .otherwise({
        redirectTo: '/login',
    })
}); // close
