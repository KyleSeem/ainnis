
myApp.controller('ProductsController', ['$scope', 'productFactory', 'bidFactory', '$cookies', '$location', '$uibModal', function($scope, productFactory, bidFactory, $cookies, $location, $uibModal){
    $scope.sessionUser = $cookies.getObject('thisUser');
    $scope.animationsEnabled = true;
    $scope.products = [];
    $scope.newBid = {};
    var status;


    // get existing products from db
    // if no products, dashboard.html will show button to create new prods
    $scope.getProducts = function(){
        productFactory.index(function(response){
            $scope.products = response;
        })
    }


    // create new products/new auction setting
    $scope.create = function(){
        productFactory.create(function(response){
            // console.log(response);
            $scope.products = response;
        })
        $scope.getProducts();
    }


    // create a new bid
    $scope.bid = function(){
        $scope.product.alert = false;

        $scope.newBid.user = $scope.sessionUser;
        $scope.newBid._product = $scope.product._id;

        bidFactory.create($scope.newBid, function(response){
            if (response.errors){
                $scope.product.alert = true;
            }
            else{
                $scope.newBid = {};
                $scope.product.bids = response.bids;
            }
        })
        $scope.getProducts();
    }


    // make sure all products have at least one bid before ending Auction
    $scope.endAuction = function(){
        var prods = $scope.products;

        for (var p in prods){
            // console.log(prods[p].bids.length);
            if (prods[p].bids.length === 0 | prods[p].bids.length == undefined){
                status = false;
            }
        }

        if (status === false){
            $scope.warn();
        }
        else{
            $location.url('/results');
        }
    }


    // delete existing bid and product models from database
    $scope.clearDB = function(){
        productFactory.delete();
        bidFactory.delete();
    }


    // clear db and create new auction setting, return to dashboard
    $scope.newAuction = function(){
        $scope.clearDB();
        $scope.create();
        $location.url('/dashboard');
    }


    // modal
    $scope.warn = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'modal_template.html',
            controller: 'ModalInstanceCtrl',
        });
    }

}]); // close ProductsController



// this is the controller referenced in the modalInstance
myApp.controller('ModalInstanceCtrl', function($scope, $uibModalInstance){
    $scope.ok = function(){
        $uibModalInstance.close();
    }
}); // close ModalInstanceCtrl
