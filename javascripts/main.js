var redditApp = angular.module('redditApp', ['ngStorage']);

redditApp.controller('PostsController', function($scope, $localStorage) {
  $scope.$storage = $localStorage.$default({
    "posts" : [{
      "title": "My best friend",
      "author": "Harry Potter",
      "image": "http://vignette2.wikia.nocookie.net/harrypotter/images/1/18/Hedwig_books.png/revision/latest?cb=20150601043532",
      "description": "Seriously, there could not be a cooler owl.",
      "votes": 0,
      "comments": []
    }]
  });
});