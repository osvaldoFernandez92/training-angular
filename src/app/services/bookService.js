angular.module('app').factory('bookService', [
  '$http', '$state', 'Restangular',
  function ($http, $state, Restangular) {
    return {
       availableBooks: (success, error, page, take) => {
         return Restangular.one('classes/Book').get({skip: page, limit: take}).then(success, error);
      }
    };
  }
]);
