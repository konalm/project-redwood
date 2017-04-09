var InvoiceController = App.controller("InvoiceController", function ($scope, $http, $location) {
  $scope.invoiceData = {};
  $scope.errorMessage = '';

  $scope.createInvoice = function(isValid) {
    console.log('create invoice');

    if (!isValid) {
      return;
    }

    var invoiceData_json = JSON.stringify($scope.invoiceData);

    $http.post('http://localhost:8888/play/sf-backend/web/app_dev.php/collect-data',
    {
      'InvoiceData' : invoiceData_json
    })
      .then(function (response) {
        console.log('sent invoice data');
        console.log(response);
        $location.path('/invoice/preview');
      });
  }
});
