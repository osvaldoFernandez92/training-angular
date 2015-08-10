angular.module('app').factory('authenticationService', [
  '$http', 'localStorageService', '$state', 'Restangular',
  function ($http, localStorageService, $state, Restangular) {

    return {
      logout: () => {
        $http.defaults.headers.common['X-Parse-Session-Token'] = localStorageService.get('session_token');
        Restangular.one('logout').post().then(function(resp) {
            alert('YOU HAVE LOGGED OUT');
            console.log(resp);
            localStorageService.remove('session_token');
          }, function(resp) {
            alert('ERROR');
            console.log(resp);
        });
        $state.go('home.index');
      },

      isLoggedIn: () => {
        return !!localStorageService.get('session_token');        
      },

      login: (params, success, error) => {
        const defaultSuccessCb =  (data) => {
          localStorageService.set('session_token', data.sessionToken);
          success(data);
        };
        return Restangular.one('login').get(params).then(defaultSuccessCb, error);
      },
    };
  }
]);
