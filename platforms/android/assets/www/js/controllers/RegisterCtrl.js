app.controller('RegisterCtrl', function ($scope, $stateParams, ionicMaterialInk, $document, $state) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();


    $scope.doRegister = function(userSignup) {
	    //console.log(userSignup);
	    var user_name 			= $document[0].getElementById("user_name").value;
	    var user_email 			= $document[0].getElementById("user_email").value;
	    var user_pass 			= $document[0].getElementById("user_pass").value;
	    var user_repeatpass 	= $document[0].getElementById("user_repeatpass").value;

	    if(user_name != "" && user_email != "" && user_pass != "" && user_repeatpass != ""){

	    	// cek apakah password sama dengan repeat pass
	    	if(user_pass !== user_repeatpass) {
		        alert('Your password is not the same as password repeat');
		        return false;
	    	} else {
		        firebase.auth().createUserWithEmailAndPassword(user_email, user_pass).then(function() {
		          // Sign-In successful.
		          //console.log("Signup successful");

		          var user = firebase.auth().currentUser;

		          user.sendEmailVerification().then(function(result) { console.log(result) },function(error){ console.log(error)}); 

		          user.updateProfile({
		            displayName: userSignup.displayname,
		            photoURL: userSignup.photoprofile
		          }).then(function() {
		            // Update successful.
		            $state.go("app.login");
		          }, function(error) {
		            // An error happened.
		            console.log(error);
		          });
		          

		        }, function(error) {
		          // An error happened.
		          var errorCode = error.code;
		          var errorMessage = error.message;
		          console.log(errorCode);

		          if (errorCode === 'auth/weak-password') {
		             alert('Password is weak, choose a strong password.');
		             return false;
		          }else if (errorCode === 'auth/email-already-in-use') {
		             alert('Email you entered is already in use.');
		             return false;
		          }
		        });
	   	 	}
	    } else{
	        alert('Please fill in all the form provided');
	        return false;

	    }//end check client username password
    }	
});