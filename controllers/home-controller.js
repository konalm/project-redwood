var HomeController = App.controller("HomeController", function ($scope, $http, $cookies, $location, $rootScope) {
  console.log('Home Controller !!!');

  $scope.firstName = '';

  var key = $cookies.get('project-redwood-key');

  console.log('making api request to get user-data');

  // get user data
  $http.get('http://localhost:8888/play/sf-backend/web/app_dev.php/user-data', {
    headers: {'key' : key}
  })
    .then(function (response) {
      console.log('looking for response');
      console.log(response);
      $scope.firstName = response.data.firstname;
    },
      function (errorResponse) {
        console.log('recieved error');
        console.log(errorResponse);
        $location.path('/sign-in');
      });
});
