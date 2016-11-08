app.controller('HariCtrl', HariCtrl);


HariCtrl.$inject = ['$scope', '$stateParams', 'ionicMaterialInk', 'CONFIG', 'REFERENCE', '$firebaseArray'];
function HariCtrl ($scope, $stateParams, ionicMaterialInk, CONFIG, REFERENCE, $firebaseArray) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    var database = firebase.database();

    // get list hari
    var hariRef = firebase.database().ref(REFERENCE.M_HARI);
    hariRef.on('value', function(snapshot) {
        $scope.haris = snapshot.val();
    });

    hariRef.on('child_changed', function(data) {
        console.log(data);
        updateHari(postElement, data.key, data.nama, data);
    });

    hariRef.on('child_removed', function(data) {
        deleteHari(postElement, data.key);
    });


    $scope.createHari = function(hariBaru) {
        var postData = {
            nama: hariBaru.nama,
        };

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('m_hari').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/m_hari/' + newPostKey] = postData;
        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }

    $scope.updateHari = function(postElement, key, nama_data, data) {
        var postData = {
            nama: nama_data,
        };

        var updates = {};
        updates['/m_hari/' + key] = postData;
        console.log(data);

        return firebase.database().ref().update(updates);
    }
    
    $scope.indexHari = function() {
        function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
        }
    }

    $scope.deleteHari = function(id) {
        
    }
}