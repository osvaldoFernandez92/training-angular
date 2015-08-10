app.config([
  '$httpProvider','$stateProvider', '$urlRouterProvider', '$locationProvider', 'RestangularProvider','configuration',
  function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider, configuration) {


  //http default header configuration
    $httpProvider.defaults.headers.common = {
      'Content-Type': configuration.baseHeaderContentType,
      'X-Parse-Application-Id': configuration.baseHeaderAppID,
      'X-Parse-REST-API-Key': configuration.baseHeaderAPIKey
    };

  // Restangular configuration
    RestangularProvider.setBaseUrl(configuration.baseParseURL);

  // For any unmatched urls
  $urlRouterProvider.otherwise( ($injector) => {
    $injector.get('$state').go('home.index');
  });

  // Now set up the states
  $stateProvider
    .state('home', {
      abstract: true,
      template: '<ui-view/>',
      views: {
        main: {
          templateUrl: '../app/layouts/home/main.html'
        }
      }
    })
    .state('home.index', {
      url: '/home',
      views: {
        innerComponent: {
          templateUrl: '../app/components/component1/home.html'
        }
      },
      data: {
        requireLogin: false,
        requireLogout: false
      }           
    })
    .state('sign_up', {
      abstract: true,
      template: '<ui-view/>',
      views: {
        main: {
          templateUrl: '../app/layouts/sign_up/main.html'
        }
      }
    })
    .state('sign_up.index', {
      url: '/sign_up',
      views: {
        innerComponent: {
          templateUrl: '../app/components/component2/sign_up.html'
        }
      },
      data: {
        requireLogin: false,
        requireLogout: true
      } 
    })
    .state('login', {
      abstract: true,
      template: '<ui-view/>',
      views: {
        main: {
          templateUrl: '../app/layouts/login/main.html'
        }
      }
    })
    .state('login.index', {
      url: '/login',
      views: {
        innerComponent: {
          templateUrl: '../app/components/login/login.html'
        }
      },
      data: {
        requireLogin: false,
        requireLogout: true
      }
    }) 
    .state('user', {
      abstract: true,
      url: '/user',
      views: {
        main: {
          templateUrl: '../app/layouts/user/main.html'
        }
      }
    })
    .state('user.edit', {
      url: '/edit',
      views: {
        innerComponent: {
          templateUrl: '../app/components/user/edit.html'
        }
      },
      data: {
        requireLogin: true,
        requireLogout: false
      } 
    });

    $locationProvider.html5Mode(true);
}]);
