/**
 * Created by gerd on 06.08.2015.
 */
(function() {
    'use strict';

    angular.module('bit.workshop')
        .controller('BookListController', function BookListController(BookDataService, $filter) {
            var ctrl = this;

            //this.books = BookDataService.getBooks();
            BookDataService.getBooks()
                .then(function(books) {
                    // ctrl.books = $filter('limitTo')(books, 1);
                    ctrl.books = books.map(function(book) {
                        book.title = $filter('truncate')(book.title, 10, '!!!');
                        return book;
                    });
                });
        })
}());