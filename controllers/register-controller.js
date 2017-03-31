var RegisterController = App.controller("RegisterController", function ($scope, $http, $cookies) {

  $scope.formData = {};
  $scope.errorMessage = '';

  $scope.submitForm= function (isValid) {
    if (!isValid) {
      return;
    }

    MyJSON = JSON.stringify($scope.formData);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/register',
    {
      'JsonData' : MyJSON
    })
      .then(function (response) {
        console.log('recieved response');
        console.log(response);
        $scope.errorMessage = response.data.message;
        console.log(response.data.key);

        $cookies.put('project-redwood-key', response.data.key);
        console.log('saved key to cookie');
    });
  }
});
