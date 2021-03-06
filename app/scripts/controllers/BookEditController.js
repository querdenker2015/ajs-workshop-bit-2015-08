/**
 * Created by gerd on 06.08.2015.
 */
(function () {
    angular
        .module('bit.workshop')
        .controller('BookEditController', BookEditController);

    // BookEditController.$inject = [''];

    /* @ngInject */
    function BookEditController(book, BookDataService, $log) {
        this.book = book;

        // Public API
        this.updateBook = updateBook;
        this.showRating = showRating;

        /**
         *
         * @param book
         */
        function updateBook(book) {
            BookDataService.updateBook(book)
                .then(function(result) {
                    $log.debug(result);
                });
        }

        /**
         *
         * @param rating
         */
        function showRating(rating) {
            $log.debug(rating);
        }

    }
}());