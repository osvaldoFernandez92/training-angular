angular.module('app').controller('UserController', ['Restangular',
function(Restangular) {
	this.baseUsers = Restangular.all('users');
	this.user={};
	this.addUser=function(){
		//NEW USER
		var newUser = {
  			'username': this.user.usrname,
			'password': this.user.pw1,
			'email': this.user.email,
			'firstName': this.user.name,
			'lastName': this.user.lastname
		};
        this.baseUsers.post(newUser).then(function(resp) {
            console.log('new Object id', resp.objectId);
            console.log('session token', resp.sessionToken);
        }, function(resp) {
            console.log(resp.data.error);
        });
		this.user={};
	};
}]);

var compareTo = function() {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=compareTo'
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue === scope.otherModelValue;
            };
 
            scope.$watch('otherModelValue', function() {
                ngModel.$validate();
            });
        }
    };
};
 
angular.module('app').directive('compareTo', compareTo);