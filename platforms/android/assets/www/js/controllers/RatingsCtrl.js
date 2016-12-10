app.controller('RatingsCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    // function untuk pencarian no telepon
    $scope.doCari = function(phone) {
        console.log(phone);
    }
});