var myApp = angular.module('myApp');
myApp.controller('BooksController', [
 '$scope','$http','$location','$routeParams','$route', function ($scope,$http,$routeParams,$location,$route) {  
    
    $scope.getBooks = function () {
        $http.get('/api/books').then(function (response) {
            $scope.books = response.data;
        })
    };

    $scope.getBook = function () {
        var id = $route.current.params.id;

        $http.get('/api/books/'+id).then(function (response) {
            $scope.book = response.data;
        })
    };

    $scope.addBook = function () {
        $http.post('/api/books/',$scope.book).then(function (response) {
            window.location.href="#/books";
        })
    };

    $scope.updateBook = function () {
        var id = $route.current.params.id;
        $http.put('/api/books/'+id,$scope.book).then(function (response) {
            window.location.href="#/books";
        })
    };

    $scope.removeBook = function (id) {

        $http.delete('/api/books/'+id).then(function (response) {
            window.location.href="#/books";
        })
    };

 }]);