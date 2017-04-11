console.log('loaded file');


var InvoicesController = App.controller("InvoicesController", function ($scope, $http, $location, $cookies, $rootScope) {
  $scope.invoiceData = {};
  $scope.clientData = {};
  $scope.errorMessage = '';
  $scope.clientId = '';

  var key = $cookies.get('project-redwood-key');

  $scope.createClient = function (isValid) {
    var clientData_json = JSON.stringify($scope.clientData);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/client-create',
    {
      'ClientData' : clientData_json
    }, {
      headers: {'key' : key}
    })
      .then(function (response) {
        $scope.clientId = response.data.client_id;
        $scope.createInvoice();
      });
  }

  $scope.createInvoice = function(isValid) {
    // if (!isValid) {
    //   return;
    // }

    $http.post($rootScope.apiUrl + '/invoice-create',
    {
      'ClientId' : $scope.clientId
    }, {
      headers: {'key' : key}
    })
      .then(function (response) {
        $location.path('/invoice/' + response.data.invoice_id)
      }, function (errorResponse) {
        console.log(errorResponse);
      });
  }
});
