// var app = angular.module('starter.login', ['ionic-material', 'firebase']);
app.controller('LoginCtrl', LoginCtrl);
// app.controller('RegisterCtrl', RegisterCtrl);
// app.controller('ResetEmailCtrl', ResetEmailCtrl);
app.controller('LogoutCtrl', LogoutCtrl);

function LoginCtrl($scope, $stateParams, ionicMaterialInk, $state, $firebaseArray, $document, CONFIG, $location, $location) {
    ionicMaterialInk.displayEffect();


  	$scope.loginWithGoogle = function loginWithGoogle() {
  		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);


		firebase.auth().getRedirectResult().then(function(result) {
	  	if (result.credential) {
		    // This gives you a Google Access Token. You can use it to access the Google API.
		    var token = result.credential.accessToken;
		  }
		  // The signed-in user info.
		  var user = result.user;

		  $location.path('/app/profile');
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});



  // 		firebase.auth().signInWithPopup(provider).then(function(result) {
		//   // This gives you a Google Access Token. You can use it to access the Google API.
		//   var token = result.credential.accessToken;
		//   // The signed-in user info.
		//   var user = result.user;

		//   console.log(token);
		//   // redirect to profile
		//   $location.path('/app/profile');
		// }).catch(function(error) {
		//   // Handle Errors here.
		//   var errorCode = error.code;
		//   var errorMessage = error.message;
		//   // The email of the user's account used.
		//   var email = error.email;
		//   // The firebase.auth.AuthCredential type that was used.
		//   var credential = error.credential;
		//   // ...
		// });
  	};

  	$scope.loginWithFacebook = function loginWithFacebook() {
  		var provider = new firebase.auth.FacebookAuthProvider();
  		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user

		  // redirect to profile
		  $state.go('app.profile');
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
  	};


  	$scope.doLogin = function(userLogin) {
  		console.log(userLogin);

  		var user_email 		= $document[0].getElementById('user_email').value;
  		var user_pass 		= $document[0].getElementById('user_pass').value;

		if( user_email != "" && user_pass != "") {
			firebase.auth().signInWithEmailAndPassword(userLogin.user_email, userLogin.user_pass).then (function() {
				console.log('login success');

				var user = firebase.auth().currentUser;
				var name, email, photoUrl, uid;

				if(user.emailVerified) {

					name = user.displayName;
					email = user.email;
					photoUrl = user.photoURL;
					uid = user.uid;  

					//console.log(name + "<>" + email + "<>" +  photoUrl + "<>" +  uid);

					localStorage.setItem("photo",photoUrl);

					$state.go("app.profile");
					// $location.path( "app/profile" );
					console.log("email verified");
				} else {
					alert("Email not verified, please check your inbox or spam messages")
                        return false;
				}

			}, function(error) {
				var errorCode 		= error.code;
				var errorMessage 	= error.message;
				console.log(errorCode);

				if(errorCode === 'auth/invalid-email') {
					alert('Enter a valid email');
					return false;
				} else if(errorCode === 'auth/wrong-password') {
					alert('')
					return false;
				} else if (errorCode === 'auth/argument-error') {
					alert('Password must be string.');
					return false;
				}else if (errorCode === 'auth/user-not-found') {
					alert('No such user found.');
					return false;
				}else if (errorCode === 'auth/too-many-requests') {
					alert('Too many failed login attempts, please try after sometime.');
					return false;
				}else if (errorCode === 'auth/network-request-failed') {
					alert('Request timed out, please try again.');
					return false;
				}else {
					alert(errorMessage);
					return false;
				}
			});
		} else {
			alert('Please enter email and password');
    		return false;
		}	
  	}



  	$scope.doLogout = function() {
  		firebase.auth().signOut().then(function() {
  			$sate.go("login");
  		}, function(error) {
  			console.log(error)	
  		});
  	}

}
LoginCtrl.$inject = ['$scope', '$stateParams', 'ionicMaterialInk', '$state', '$firebaseArray', '$document', 'CONFIG', '$location', '$location'];	



function LogoutCtrl($scope, $stateParams, ionicMaterialInk, $state, $firebaseArray, $document, CONFIG, $location, $location) {
    ionicMaterialInk.displayEffect();


}
LogoutCtrl.$inject = ['$scope', '$stateParams', 'ionicMaterialInk', '$state', '$firebaseArray', '$document', 'CONFIG', '$location', '$location'];	

