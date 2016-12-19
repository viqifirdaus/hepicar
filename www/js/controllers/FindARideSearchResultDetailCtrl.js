app.controller('FindARideSearchResultDetailCtrl', function ($scope, $stateParams, ionicMaterialInk, $ionicPopup, $timeout, sharedProperties) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $scope.offer = sharedProperties.getFormFindARide();
    console.log($scope.offer);

    $scope.showRatings = function() {
        var alertPopup = $ionicPopup.alert({
            title: "oke",
            template: "ooke"
        });

        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };

    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            $scope.modal.hide();
        }, 2000);
    };
    
});