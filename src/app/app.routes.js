app.config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider', 'RestangularProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {

  // Restangular configuration
    RestangularProvider.setBaseUrl('https://api.parse.com/1');
    RestangularProvider.setDefaultHeaders({
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'DfYLYMHIcC80ykwZFbQet4a3YqYkOD92hcXIMIfA',
      'X-Parse-REST-API-Key': '0HlB6mmcrPMbu6UTyrnLnBJ4abOasv9TPrK6JYkE'
    });

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
          templateUrl: '../app/components/component1/component1.html'
        }
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
          templateUrl: '../app/components/component2/component2.html'
        }
      }
    });

    $locationProvider.html5Mode(true);
}]);
