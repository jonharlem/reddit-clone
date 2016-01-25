var redditApp = angular.module('redditApp', ['ngStorage', 'ui.bootstrap']);

redditApp.controller('PostsController', function($scope, $localStorage, $uibModal) {
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

  $scope.open = function (size) {
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
});



angular.module('redditApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, storage) {

  $scope.submit = function (postForm) {
    console.log(storage)
    // post.votes = 0;
    // post.comments = [];
    // $scope.$storage.posts.push(post);
    // $scope.submitted = true;
    //$uibModalInstance.dismiss('cancel');
  };
});