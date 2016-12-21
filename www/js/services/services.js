var app = angular.module('services', ['firebase']);

app.factory('Auth', Auth);
app.service('Chats', Chats) 
    .service('sharedProperties', function () {
        var FormFindARide = { from: '', to: '', seat: 0 };
        var FormOffer = { };

        return {
            getFormFindARide: function () {
                return FormFindARide;
            },
            setFormFindARide: function(value) {
                FormFindARide = value;
            },
            getFormAddOffer: function () {
                return FormOffer;
            },
            setFormAddOffer: function(value) {
                FormOffer = value;
            } 
        };
    })
    .filter('time', function() {
        return function(x) {
            var dt = new Date(parseInt(x));
            return ((dt.getHours() < 10) ? '0': '') + dt.getHours() 
                + ":" + ((dt.getMinutes() < 10) ? '0': '') +dt.getMinutes();
        };
    })
    .filter('date', function() {
        return function(x) {
            var dt = new Date(parseInt(x));
            return ((dt.getDate() < 10) ? '0': '') + dt.getDate() + ':'
                + ((dt.getMonth() < 10) ? '0': '') + dt.getMonth() + '/' + dt.getFullYears();
        };
    });

function Auth(rootRef, $firebaseAuth) {
	return $firebaseAuth(rootRef);
}

Auth.$inject = ['rootRef', '$firebaseAuth'];

function Chats() {
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