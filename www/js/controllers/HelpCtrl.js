app.controller('HelpCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});

app.controller('HelpTermAndConditionsCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});

app.controller('HelpPrivacyCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});

app.controller('HelpLicensesCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});

app.controller('HelpFAQCtrl', function ($scope, $stateParams, ionicMaterialInk, $ionicPopup, $timeout, REFERENCE) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();


    
    // get list faq
    var faqRef = firebase.database().ref(REFERENCE.FAQ);
    faqRef.on('value', function(snapshot) {
        $scope.faqs = snapshot.val();
        console.log("loggg" + snapshot.val());
    });

    // hariRef.on('child_changed', function(data) {
    //     console.log(data);
    //     updateHari(postElement, data.key, data.nama, data);
    // });

    // hariRef.on('child_removed', function(data) {
    //     deleteHari(postElement, data.key);
    // });


    // show popup faq
    var id = '0';
    var pertanyaan  = "";
    var jawaban     = "";
    $scope.showPopup = function(id) {
        var faqContentRef = firebase.database().ref(REFERENCE.FAQ + "/" + id);
        faqContentRef.on('value', function(snapshot) {
            pertanyaan = snapshot.val().pertanyaan;
            jawaban = snapshot.val().jawaban;
            console.log(jawaban)
        });

        var alertPopup = $ionicPopup.alert({
            title: pertanyaan,
            template: jawaban
        });

        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };

});
