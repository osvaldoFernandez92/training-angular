angular.module('app').controller('Component2Controller', [
function() {
  this.component2Phrase = 'Register';
}]);


angular.module('app').controller('UserController', [
function(Restangular) {
	this.baseUsers = Restangular.all('users');
	this.user={};
	this.addUser=function(){

		//NEW ACCOUNT
		var newUser = {
  			"username": this.user.usrname,
			"password": this.user.pw1,
			"email": this.user.email,
			"firstName": this.user.name,
			"lastName": this.user.lastname
		}
		baseUsers.post(newUser);
		this.user={};
	}
}]);

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
angular.module('app').directive("compareTo", compareTo);