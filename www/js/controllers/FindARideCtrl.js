app.controller('FindARideCtrl', function ($scope, $state, $stateParams, ionicMaterialInk, CONFIG, REFERENCE, $firebaseArray, sharedProperties) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $scope.form = { from: '', to: '', seat: 0 };

    $scope.clickFormButton = function () {
        sharedProperties.setFormFindARide($scope.form);
        $state.go('app.find-a-ride-search-result');
    }
});