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
		},    
	    dateToStr: function(x, y) {
	        var z = {
	            M: x.getMonth() + 1,
	            d: x.getDate(),
	            h: x.getHours(),
	            m: x.getMinutes(),
	            s: x.getSeconds()
	        };
	        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
	            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
	        });

	        return y.replace(/(y+)/g, function(v) {
	            return x.getFullYear().toString().slice(-v.length)
	        });
	    },
	    generateUID: function() {
		  var str = '', length = 32;
		  var chars ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(
		      '');
		  var charsLen = chars.length;
		  if (!length) {
		    length = ~~(Math.random() * charsLen);
		  }
		  for (var i = 0; i < length; i++) {
		    str += chars[~~(Math.random() * charsLen)];
		  }
		  return str;
		}
	};

	hideMessage = function() {
		$timeout.cancel(promise);
		$ionicLoading.hide();
	}

	return utils;
}])