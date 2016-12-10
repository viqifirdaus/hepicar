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

    .state('app.your-rides-current', {
        url: '/your-rides/current',
        views: {
            'menuContent' : {
                templateUrl: 'templates/your-rides/current.html',
                controller: 'YourRidesCurrentCtrl'
            }
        }
    })

    .state('app.your-rides-history', {
        url: '/your-rides/history',
        views: {
            'menuContent' : {
                templateUrl: 'templates/your-rides/history.html',
                controller: 'YourRidesHistoryCtrl'
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

    // Menu Find A ride
    .state('app.find-a-ride-search-result', {
        url: '/find-a-ride/search-result',
        views: {
            'menuContent' : {
                templateUrl: 'templates/find-a-ride/search-result.html',
                controller: 'FindARideSearchResultCtrl'
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

    
    // Menu Offer a Ride
    .state('app.offer-justonce', {
        url: '/offer-justonce',
        views: {
            'menuContent' : {
                templateUrl: 'templates/offer-a-ride/offerjustonce.html',
                controller: 'OfferJustOnceCtrl'
            }
        }
    })

    
    // Menu Offer a Ride
    .state('app.offer-justonce-step2', {
        url: '/offer-justonce-step2',
        views: {
            'menuContent' : {
                templateUrl: 'templates/offer-a-ride/offerjustoncestep2.html',
                controller: 'OfferJustOnceStep2Ctrl'
            }
        }
    })
    
    // Menu Offer a Ride
    .state('app.offer-often', {
        url: '/offer-often',
        views: {
            'menuContent' : {
                templateUrl: 'templates/offer-a-ride/offeroften.html',
                controller: 'OfferOftenCtrl'
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
    .state('app.messages', {
        url: '/inbox/messages',
        views: {
            'tab-messages' : {
                templateUrl: 'templates/inbox/tab-messages.html'
            }
        }
    })


    // Menu Inbox - tab-notifications
    .state('app.notifications', {
        url: '/inbox/notifications',
        views: {
            'tab-notifications' : {
                templateUrl: 'templates/inbox/tab-notifications.html'
            }
        }
    })


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

    // Menu Help
    .state('app.help-content', {
        url: '/help/help-content',
        views: {
            'menuContent' : {
                templateUrl: 'templates/help/help-content.html',
                controller: 'HelpContentCtrl'
            }
        }
    })


    
    // Menu Help
    .state('app.help-term-and-conditions', {
        url: '/help/help-term-and-conditions',
        views: {
            'menuContent' : {
                templateUrl: 'templates/help/help-term-and-conditions.html',
                controller: 'HelpTermAndConditionsCtrl'
            }
        }
    })

    
    
    // Menu Help
    .state('app.help-privacy', {
        url: '/help/help-privacy',
        views: {
            'menuContent' : {
                templateUrl: 'templates/help/help-privacy.html',
                controller: 'HelpPrivacyCtrl'
            }
        }
    })

    
    
    // Menu Help
    .state('app.help-licenses', {
        url: '/help/help-licenses',
        views: {
            'menuContent' : {
                templateUrl: 'templates/help/help-licenses.html',
                controller: 'HelpLicensesCtrl'
            }
        }
    })

    
    
    // Menu Help
    .state('app.logout', {
        url: '/logout',
        views: {
            'menuContent' : {
                // templateUrl: 'templates/help/help-term-and-conditions.html',
                controller: 'LogoutCtrl'
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
    .state('app.about-you', {
        url: '/profile/about-you',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/about.html',
                controller: 'ProfileAboutCtrl'
            }
        }
    })

    .state('app.about-you-verifyid', {
        url: '/profile/about-you/verifyid',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/verifyid.html',
                controller: 'ProfileAboutVerifyIdCtrl'
            }
        }
    })

    
    .state('app.about-you-verifytelp', {
        url: '/profile/about-you/verifytelp',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/verifytelp.html',
                controller: 'ProfileAboutVerifyTelpCtrl'
            }
        }
    })

    
    .state('app.about-you-verifyemail', {
        url: '/profile/about-you/verifyemail',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/verifyemail.html',
                controller: 'ProfileAboutVerifyEmailCtrl'
            }
        }
    })

    
    .state('app.about-you-verifyagreement', {
        url: '/profile/about-you/verifyagreement',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/verifyagreement.html',
                controller: 'ProfileAboutVerifyAgreementCtrl'
            }
        }
    })


    .state('app.profile-public', {
        url: '/profile/profile-public',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/profile-public.html',
                controller: 'ProfilePublicCtrl'
            }
        }
    })

    .state('app.profile-edit', {
        url: '/profile/profile-edit',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/profile-edit.html',
                controller: 'ProfileEditCtrl'
            }
        }
    })
    

    .state('app.preference', {
        url: '/profile/preference',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/preference.html',
                controller: 'ProfilePreferenceCtrl'
            }
        }
    })

    .state('app.car', {
        url: '/profile/car',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/car.html',
                controller: 'ProfileCarCtrl'
            }
        }
    })



    // // Menu Profile - tab-account
    .state('app.account', {
        url: '/profile/account',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/account.html',
                controller: 'ProfileAccountCtrl'
            }
        }
    })


    
    .state('app.account-notifications', {
        url: '/profile/account-notications',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/account-notifications.html',
                controller: 'ProfileAccountNotificationsCtrl'
            }
        }
    })

    
    
    .state('app.account-changepassword', {
        url: '/profile/account-changepassword',
        views: {
            'menuContent' : {
                templateUrl: 'templates/profile/account-changepassword.html',
                controller: 'ProfileAccountChangePasswordCtrl'
            }
        }
    })



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

    
    .state('app.hari', {
        url: '/hari',
        views: {
            'menuContent' : {
                templateUrl: 'templates/hari/hari.html',
                controller: 'HariCtrl'
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
    $urlRouterProvider.otherwise('/app/profile/account');
});

