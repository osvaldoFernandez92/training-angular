angular.module('app').run([
  '$rootScope', '$state', 'authenticationService', '$http', 'localStorageService',
  function ($rootScope, $state, authenticationService) {

  $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams) {
      if (!authenticationService.isLoggedIn() && toState.data.requireLogin) {
        event.preventDefault();
        alert('FORBIDDEN: You have to be logged');
        $state.go('login.index');
      }
  });
}]);