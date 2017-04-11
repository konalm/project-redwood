var InvoiceController = App.controller("InvoiceController", function($scope, $rootScope, $http, $location, $routeParams) {
  console.log('invoice controller');
  $scope.invoiceData = {};
  $scope.invoiceId = $routeParams.invoiceId;

  // var url = $location.path().split('/');
  // $scope.invoiceId = url[url.length-1];

  console.log('invoice id -->');
  console.log($scope.invoiceId);

  $scope.pdfUrl = $rootScope.apiUrl + '/invoice-preview/' + $scope.invoiceId;
});
