var redditApp = angular.module('redditApp', ['ngStorage', 'ui.bootstrap', 'angularMoment']);

redditApp.controller('PostsController', function($scope, $localStorage, $uibModal) {
  $scope.post = {};
  $scope.newComment = {};
  $scope.hideForm = true;
  $scope.hideComments = true;
  $scope.orderChoice = "-votes";

  $scope.$storage = $localStorage.$default({
    "posts" : [{
      "title": "My best friend",
      "author": "Harry Potter",
      "image": "http://vignette2.wikia.nocookie.net/harrypotter/images/1/18/Hedwig_books.png/revision/latest?cb=20150601043532",
      "description": "Seriously, there could not be a cooler owl.",
      "votes": 0,
      "comments": [],
      "date": new Date()
    }]
  });

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'newPost.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        storage: function () {
          return $scope.$storage;
        }
      }
    });
  }

  $scope.submitComment = function(commentForm, post) {
    if (commentForm.$valid) {
      post.comments.push($scope.newComment);
    }
  }
});

angular.module('redditApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, storage) {

  $scope.submit = function (postForm) {
    if (postForm.$valid) {
      storage.posts.push({
        title: postForm.title.$modelValue,
        author: postForm.author.$modelValue,
        image: postForm.image.$modelValue,
        description: postForm.description.$modelValue,
        votes: 0,
        comments: [],
        date: new Date()
      });
      $uibModalInstance.dismiss('cancel');
    }
  };
});