/**
 * Created by gerd on 06.08.2015.
 */
(function () {
    angular.module('bit.workshop')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/books', {
                    templateUrl: 'templates/bookList.html',
                    controller: 'BookListController',
                    controllerAs: 'list'
                })
                .when('/books/:isbn', {
                    templateUrl: 'templates/bookEdit.html',
                    controller: 'BookEditController',
                    controllerAs: 'edit',
                    resolve: {
                        book: function(BookDataService, $route) {
                            return BookDataService.getBook($route.current.params.isbn);
                        }
                    }
                })
                .otherwise('/books');
        });
}());