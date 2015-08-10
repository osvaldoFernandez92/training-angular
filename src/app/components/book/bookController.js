angular.module('app').controller('BookController', ['bookService',
function(bookService) {

  this.main = {
                page: 0,
                take: 1
            };

  const successCb = (data) => {
    console.log(data);
    this.results = data.results;
  };

  const errorCb = (err) => {
  	console.log(err);
    alert('listin books error');
  };

  this.loadPage = function() {
    bookService.availableBooks(successCb, errorCb, this.main.page, this.main.take);
  };
  
  this.nextPage = function() {
    if (this.main.page < 1) { 	
      this.main.page++;
      this.loadPage();
    }
  };
  
  this.previousPage = function() {
    if (this.main.page > 0) {
      this.main.page--;
      this.loadPage();
    }
  };

  this.init = function () {
  	this.loadPage();
  }
}]);
