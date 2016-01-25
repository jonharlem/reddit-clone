var redditApp = angular.module('redditApp', ['ngStorage', 'ui.bootstrap']);

redditApp.controller('PostsController', function($scope, $localStorage, $uibModal) {

  $localStorage = $localStorage.posts =
    [{
      "title": "My best friend",
      "author": "Harry Potter",
      "image": "http://vignette2.wikia.nocookie.net/harrypotter/images/1/18/Hedwig_books.png/revision/latest?cb=20150601043532",
      "description": "Seriously, there could not be a cooler owl.",
      "votes": 0,
      "comments": []
    }]
  ;

  $scope.$storage = $localStorage;

  $scope.open = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'newPost.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
  }
});



angular.module('redditApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.submit = function () {
    $scope.$storage.posts.push($scope.newPost);
    $scope.submitted = true;
    $uibModalInstance.dismiss('cancel');
  };
});