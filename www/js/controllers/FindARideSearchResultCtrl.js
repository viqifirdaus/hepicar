app.controller('FindARideSearchResultCtrl', function ($scope, $state, $stateParams, ionicMaterialInk, CONFIG, REFERENCE, $firebaseArray, sharedProperties) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
    var filterRide = sharedProperties.getFormFindARide();
    var database = firebase.database();

    // get list hari
    var offers = firebase.database().ref(REFERENCE.OFFER);
    var users = firebase.database().ref(REFERENCE.USER);

    console.log(filterRide);
    $scope.offers = []; 

    offers.orderByChild('city_from').equalTo(filterRide.from.toLowerCase()).on('value', function(snapshot) {
    	var results = snapshot.val();
    	var i = 0;

        angular.forEach(results, function(value, key) {        	
        	if(value['city_to'].toLowerCase() == filterRide.to.toLowerCase()){
	        	var userId = value['user_id'];
        	
	        	users.child(userId).on('value', function(snapshot) {
					var user = snapshot.val();

					results[key]['name'] = user['nama_depan'] + ' ' + user['nama_balakang'];
					results[key]['age'] = new Date().getFullYear() - user['tahun_lahir'];
				});

				$scope.offers[i++] = results[key];
			}
		});
    });
    console.log($scope.offers);

    $scope.clickDetailButton = function (offer) {
        sharedProperties.setFormFindARide(offer);
        $state.go('app.find-a-ride-search-result-detail');
    }

    // offers.on('child_changed', function(data) {
    //     console.log(data);
    //     updateHari(postElement, data.key, data.nama, data);
    // });

    // offers.on('child_removed', function(data) {
    //     deleteHari(postElement, data.key);
    // });
});