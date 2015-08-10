angular.module('app').controller('LoginController', [
  'authenticationService','$state',
  function (authenticationService, $state) {
    
    this.loginPhrase = 'Login';

    const successCb = (data) => {
      alert('You have logged in');
      console.log(data);
      $state.go('home.index');
    };

    const errorCb = (err) => {
      alert('error');
      console.log(err);
    };

    this.login = () => {
      const params = {
        username: this.usrname,
        password: this.password
      };

      authenticationService.login(params, successCb, errorCb);
    };
  }
]);

