app.controller('ProfileCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});


app.controller('ProfileEditCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();


    $scope.saveProfile = function( user) {
        return true;
    }
});


app.controller('ProfilePublicCtrl', function ($scope, $stateParams, ionicMaterialInk, $ionicPopup, $ionicLoading, $timeout) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    
    $scope.showPopupChat = function() {
        $ionicLoading.show({
            template: '<div style:"color:white">Senang bisa mengobrol dengan anda</div>'
        });

        // For example's sake, hide the sheet after 2 seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };


    $scope.showPopupSmoking = function() {
        $ionicLoading.show({
            template: '<div style:"color:white">Saya tidak suka merokok</div>'
        });

        // For example's sake, hide the sheet after 2 seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    
    $scope.showPopupAnimal = function() {
        $ionicLoading.show({
            template: '<div style:"color:white">Saya juga suka dengan binatang</div>'
        });

        // For example's sake, hide the sheet= after 2 seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    
    $scope.showPopupMusic = function() {
        $ionicLoading.show({
            template: '<div style:"color:white">Music/radio saya juga suka</div>'
        });

        // For example's sake, hide the sheet after 2 seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

});


app.controller('ProfilePreferenceCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});

app.controller('ProfileCarCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});