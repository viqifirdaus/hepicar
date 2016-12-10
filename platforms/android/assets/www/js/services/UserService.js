var app = angular.module('services', ['firebase', 'starter.configs']);
app.factory('UserService', UserService);



UserService.$inject = ['$q', '$firebaseObject', 'CONFIG'];
function UserService($q, $firebaseObject, CONFIG) {
	var _url = CONFIG.FIREBASE_DB_URL,
	_promise, _firebaseObject, _allUsers;


	var userService = {
		getUserList : getUserList,
		addUser : _addUser,
		updateUser: _updateUser,
		deleteUser: deleteUser 
	};

	return userService;



	function getUserList() {
		
	}
}