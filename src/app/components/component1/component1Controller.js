angular.module('app').controller('HomeController', ['authenticationService','localStorageService',
function(authenticationService,localStorageService) {
  this.component1Phrase = 'Bookstore: Home';

  this.logout = () => {
    authenticationService.logout();
  };

  this.isLoggedIn = () => {
    return !!localStorageService.get('session_token');      
  };
}]);
