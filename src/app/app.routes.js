app.config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

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
