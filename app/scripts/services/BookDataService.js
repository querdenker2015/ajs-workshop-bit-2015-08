/**
 * Created by gerd on 06.08.2015.
 */
(function () {
    angular.module('bit.workshop')
        .factory('BookDataService', function ($q, $http, $log, moment) {
            var BASE_URL = 'http://ajs-workshop.herokuapp.com/api';


            // Public API
            return {
                getBooks: getBooks,
                getBook: getBook,
                updateBook: updateBook

            };

            /**
             *
             * @returns {Promise}
             */
            function getBooks() {
                // `${BASE_URL}/books`
                return $http.get(BASE_URL + '/books')
                    .then(parseResponse);
            }

            /**
             *
             * @param isbn
             * @returns {*}
             */
            function getBook(isbn) {
                return $http.get(BASE_URL + '/books/' + isbn)
                    .then(parseResponse);
            }

            /**
             *
             * @param book
             */
            function updateBook(book) {
                return $http.put(BASE_URL + '/books/' + book.isbn, book)
                    .then(parseResponse);
            }

            // Private

            /**
             *
             * @param response
             * @returns {*}
             */
            function parseResponse(response) {
                // $log.debug(response);
                if (response.status === 200) {
                    return response.data;
                } else {
                    throw new Error('could not get books');
                }
            }
        });
}());