app.controller('ResetEmailCtrl', function($scope, $stateParams, ionicMaterialInk, $state, $document) {
    ionicMaterialInk.displayEffect();

    $scope.doResetemail = function(userReset) {
        //console.log(userReset);
        var user_email = $document[0].getElementById("user_email").value;
        if (user_email != "") {
            firebase.auth().sendPasswordResetEmail(user_email).then(function() {
                $state.go("app.login");
            }, function(error) {
                // An error happened.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);

                if (errorCode === 'auth/user-not-found') {
                    alert('No user found with provided email.');
                    return false;
                } else if (errorCode === 'auth/invalid-email') {
                    alert('Email you entered is not complete or invalid.');
                    return false;
                }
            });
        } else {
            alert('Please enter registered email to send reset link');
            return false;
        } //end check client username password
    }; // end $scope.doResetEmail()
});