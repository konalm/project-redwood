var LoginController = App.controller("LoginController", function ($scope, $http, $location, $cookies) {
  $scope.formData = {};
  $scope.errorMessage = '';

  $scope.submitForm = function(isValid) {
    if (!isValid) {
      return;
    }

    var formData_json = JSON.stringify($scope.formData);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/login',
    {
      'LoginData' : formData_json
    })
      .then(function (response) {
        console.log('recieved response');
        console.log(response);
        console.log(response.data.key);
        $cookies.put('project-redwood-key', response.data.key);
        $scope.errorMessage = '';
        $location.path('/home');
      },
        function (errorResponse) {
          console.log('recieved error');
          $scope.errorMessage = errorResponse.data;
        });
  }
});
