var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'BooksController',
            templateUrl: 'Views/books.html'
        })
        .when('/books', {
            controller: 'BooksController',
            templateUrl: 'Views/books.html'
        })
        .when('/books/details/:id', {
            controller: 'BooksController',
            templateUrl: 'Views/book_details.html'
        })
        .when('/books/add', {
            controller: 'BooksController',
            templateUrl: 'Views/add_book.html'
        })
        .when('/books/edit/:id', {
            controller: 'BooksController',
            templateUrl: 'Views/edit_book.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});