var SettingsController = App.controller('SettingsController', function ($scope, $http, $cookies, $location) {

  $scope.settings = {};
  var key = $cookies.get('project-redwood-key');

  $http.get('http://localhost:8888/play/sf-backend/web/app_dev.php/user-data', {
    headers: {'key' : key}
  })
    .then(function (response) {
      $scope.firstName = response.data.firstname;

      // user settings
      $http.get('http://localhost:8888/play/sf-backend/web/app_dev.php/user-settings', {
        headers: {'key' : key}
      })
        .then(function (response) {
          $scope.settings = response.data;
          console.log(response.data);
        });
    },
      function (errorResponse) {
        $location.path('/sign-in');
      });


  $scope.settings = {};

  $scope.submitForm = function (isValid) {
    if (!isValid) {
      return;
    }

    var settingsData_json = JSON.stringify($scope.settings);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/user-settings-update',
    {
      'SettingsData' : settingsData_json
    }, {
      headers: {'key' : key}
    })
      .then(function (response) {
        console.log('updated setttings');
      })
  };
});
