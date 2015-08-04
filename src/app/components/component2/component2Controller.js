angular.module('app').controller('Component2Controller', [
function() {
  this.component2Phrase = 'Register';
}]);


angular.module('app').controller('UserController', [
function() {
	this.user={};
	this.addUser=function(){
		1+1;
		this.user={};
	}
	
  
}]);