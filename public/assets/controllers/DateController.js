
myApp.controller('DateController', ['$scope', 'userFactory', '$cookies', function($scope, userFactory, $cookies){

    $scope.today = function(){
        $scope.dt = new Date();
    };
    $scope.today();


    $scope.clear = function(){
        $scope.dt = null;
    };

    $scope.dateOptions = {
        // dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.open1 = function(){
        $scope.popup1.opened = true;
    };

    $scope.setDate = function(year, month, day){
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false,
    };





}]); // close DateController
