// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'utils', 'services', 'starter.configs','firebase']);

app.run(function ($ionicPlatform, $rootScope, $state, CONFIG) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });



    firebase.initializeApp({
      apiKey: CONFIG.FIREBASE_API,
      authDomain: CONFIG.FIREBASE_AUTH_DOMAIN,
      databaseURL: CONFIG.FIREBASE_DB_URL,
      storageBucket: CONFIG.FIREBASE_STORAGE,
      messagingSenderId: CONFIG.FIREBASE_STORAGE
    });
    
    // $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    //     if(error === 'AUTH_REQUIRED') {
    //         $state.go('app.login');
    //     }
    // });
})


app.constant('FirebaseUrl', 'https://carpool-d5ad9.firebaseio.com/');
// app.service('rootRef', ['FirebaseUrl', Firebase]);


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    // Menu Your rides
    .state('app.your-rides', {
        url: '/your-rides',
        views: {
            'menuContent' : {
                templateUrl: 'templates/your-rides/index.html',
                controller: 'YourRidesCtrl'
            }
        }
    })

    //# untuk tab di dalam Menu Your rides
    // Menu Your rides - tab-current
    // .state('app.tab-history', {
    //     url: '/tab-current',
    //     views: {
    //         'tab-current' : {
    //             templateUrl: 'templates/your-rides/tab-current.html'
    //         }
    //     }
    // })


    //Menu Your rides - tab-history
    .state('app.tab-history', {
        url: '/tab-history',
        views: {
            'tab-history' : {
                templateUrl: 'templates/your-rides/tab-history.html'
            }
        }
    })


    // Menu Find A ride
    .state('app.find-a-ride', {
        url: '/find-a-ride',
        views: {
            'menuContent' : {
                templateUrl: 'templates/find-a-ride/findaride.html',
                controller: 'FindARideCtrl'
            }
        }
    })


    // Menu Offer a Ride
    .state('app.offer-a-ride', {
        url: '/offer-a-ride',
        views: {
            'menuContent' : {
                templateUrl: 'templates/offer-a-ride/offeraride.html',
                controller: 'OfferARideCtrl'
            }
        }
    })

    // Menu Ratings
    .state('app.ratings', {
        url: '/ratings',
        views: {
            'menuContent' : {
                templateUrl: 'templates/ratings/ratings.html',
                controller: 'RatingsCtrl'
            }
        }
    })


    // Menu Inbox
    .state('app.inbox', {
        url: '/inbox',
        views: {
            'menuContent' : {
                templateUrl: 'templates/inbox/inbox.html',
                controller: 'InboxCtrl'
            }
        }
    })


    //# tab menu di dalam menu inbox
    // Menu Inbox - tab-messages
    // .state('app.messages', {
    //     url: '/messages',
    //     views: {
    //         'tab-messages' : {
    //             templateUrl: 'templates/inbox/tab-messages.html'
    //         }
    //     }
    // })


    // // Menu Inbox - tab-notifications
    // .state('app.notifications', {
    //     url: '/notifications',
    //     views: {
    //         'tab-notifications' : {
    //             templateUrl: 'templates/inbox/tab-notifications.html'
    //         }
    //     }
    // })


    // Menu Help
    .state('app.help', {
        url: '/help',
        views: {
            'menuContent' : {
                templateUrl: 'templates/help/help.html',
                controller: 'HelpCtrl'
            }
        }
    })

    // Menu Profile
    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    // didalam menu profile
    // Menu Profile - tab-about
    // .state('app.about', {
    //     url: '/about',
    //     views: {
    //         'tab-about' : {
    //             templateUrl: 'templates/profile/tab-about.html'
    //         }
    //     }
    // })


    // // Menu Profile - tab-account
    // .state('app.account', {
    //     url: '/account',
    //     views: {
    //         'tab-account' : {
    //             templateUrl: 'templates/profile/tab-account.html'
    //         }
    //     }
    // })




    // Menu Login
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent' : {
                templateUrl: 'templates/login/login.html',
                controller: 'LoginCtrl'
            }
        }
    })


    // Menu Register
    .state('app.register', {
        url: '/register',
        views: {
            'menuContent' : {
                templateUrl: 'templates/login/register.html',
                controller: 'RegisterCtrl'
            }
        }
    })



    // Menu Reset
    .state('app.reset', {
        url: '/reset',
        views: {
            'menuContent' : {
                templateUrl: 'templates/login/resetemail.html',
                controller: 'ResetEmailCtrl'
            }
        }
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('/app/components');
    $urlRouterProvider.otherwise('/app/login');
});

