angular.module('app').controller('LoginController', [
  'authenticationService',
  function (authenticationService) {
    
    this.loginPhrase = 'Login';

    const successCb = (data) => {
      alert('You have logged in');
      console.log(data);
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

