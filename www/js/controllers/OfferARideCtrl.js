app.controller('OfferARideCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});


app.controller('OfferJustOnceCtrl', function ($scope, $state, $stateParams, ionicMaterialInk, CONFIG, REFERENCE, $firebaseArray, sharedProperties) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $scope.offer = {};

    $scope.doOfferJustOnce = function() {
        $state.go('app.offer-justonce-step2');
        sharedProperties.setFormAddOffer($scope.offer);
    }
});


app.controller('OfferJustOnceStep2Ctrl', function ($scope, $state, $stateParams, ionicMaterialInk, CONFIG, REFERENCE, $firebaseArray, sharedProperties, utils) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $scope.offer = sharedProperties.getFormAddOffer();

    var offerRef = firebase.database().ref(REFERENCE.OFFER);

    $scope.doOfferJustOnce = function(){        
        $scope.offer.travel_date = ($scope.offer.travel_date == null) ? '' : utils.dateToStr(new Date($scope.offer.travel_date), 'yyyy-MM-dd');
        $scope.offer.travel_time = utils.dateToStr(new Date($scope.offer.travel_time), 'hh:mm:ss');
        $scope.offer.return_date = ($scope.offer.return_date == null) ? '' : utils.dateToStr(new Date($scope.offer.return_date), 'yyyy-MM-dd');
        $scope.offer.return_time = utils.dateToStr(new Date($scope.offer.return_time), 'hh:mm:ss');
        $scope.createOffer($scope.offer);       
    }

    $scope.createOffer = function(offer) {
        console.log(offer);
        var postData = {
            cost_per_pessenger : offer.price,
            date_time_travel : (new Date(offer.travel_date + ' ' + offer.travel_time)).valueOf(),
            date_time_return : (new Date(offer.return_date + ' ' + offer.return_time)).valueOf(),
            dropoff_lat : -2.428624,
            dropoff_log : 25.114746,
            is_often : 'Sering',
            kendaraan_id : 1,
            offer_detail_pickup : 'offer offer_detail_pickup',
            offer_detail_return :  'offer offer_detail_return',
            pickup_flexibility : offer.pickup_flexibility,
            pickup_lat : -2.428624,
            pickup_log : 25.114746,
            city_from : offer.from.toLowerCase(),
            city_to : offer.to.toLowerCase(),
            posible_detour : offer.possible_detour,
            seat_offer : 'offer',
            ukuran_barang_bawaan : offer.luggage_size,
            user_id : 0
        };

        offerRef.child(utils.generateUID()).set(postData);
    }
});


app.controller('OfferOftenCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
});