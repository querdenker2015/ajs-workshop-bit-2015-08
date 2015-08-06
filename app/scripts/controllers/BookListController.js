/**
 * Created by gerd on 06.08.2015.
 */
(function() {
    'use strict';

    angular.module('bit.workshop')
        .controller('BookListController', function BookListController(BookDataService) {
            var ctrl = this;

            //this.books = BookDataService.getBooks();
            BookDataService.getBooks()
                .then(function(books) {
                    ctrl.books = books;
                });
        })
}());