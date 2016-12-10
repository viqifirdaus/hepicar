var app = angular.module('services', ['firebase']);

app.factory('Hari', Hari);


var ref = new Firebase(CONFIG.FIREBASE_DB_URL); // https://YOUR-FIREBASE-APP.firebaseio.com

// download the data into a local object
$scope.data = $firebaseObject(ref);
console.log($scope.data);


function Auth(rootRef, $firebaseAuth, CONFIG) {
	return $firebaseAuth(rootRef);
}

Hari.$inject = ['rootRef', '$firebaseAuth', 'CONFIG'];

function Hari() {
	var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
}