var app = angular.module('utils', ['firebase']);

app.factory('utils', [function ($ionicLoading, $timeout, Popup) {
	
	var promise;
	var utils = {
		show: function() {
			$ionicLoading.show({
				template: '<ion-spinner icon="ripple"></ion-spinner>'
			});
		},
		hide: function() {
			$ionicLoading.hide();
		},
		message: function(icon, message) {
			$ionicLoading.show({
				template: '<div class="message-popup" onclick="hideMessage()"><h1><i class="icon ' + icon + '"></i></h1><p>' + message + '</p></div>',
				scope: this
			});
			promise = $setTimeout(function() {
				$ionicLoading.hide();
			}, Popup.delay);
			return promise;
		}
	};

	hideMessage = function() {
		$timeout.cancel(promise);
		$ionicLoading.hide();
	}

	return utils;
}])