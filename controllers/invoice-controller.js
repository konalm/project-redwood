var InvoiceController = App.controller("InvoiceController",
  function($scope, $rootScope, $http, $location, $routeParams, $cookies, $window)
{
  $scope.invoiceData = {};
  $scope.invoiceId = $routeParams.invoiceId;
  $scope.step = $routeParams.step;
  $scope.sentFeedback = '';
  $scope.infoData = {};
  $scope.infoData.date = new Date();
  $scope.infoData.customDate = $scope.myDate;
  var authToken = $cookies.get('project-redwood-key');

  $scope.stepTemplates = {
    stepOne: $rootScope.baseUrl + '/views/invoice/client.html',
    stepTwo: $rootScope.baseUrl + '/views/invoice/information.html',
    stepThree: $rootScope.baseUrl + '/views/invoice-line-items.html',
    stepFour: $rootScope.baseUrl + '/views/invoice-options.html'
  };

  $scope.template =  $rootScope.baseUrl + '/views/invoice/client.html';

  $scope.pdfUrl = $rootScope.apiUrl +
    '/invoice-preview/' +
    $scope.invoiceId +
    '?auth-token=' + authToken;

  $scope.download = function () {
    $window.open(
      $rootScope.apiUrl +
      '/invoice-download/' +
      $scope.invoiceId +
      '?auth-token=' +
      authToken,
      '_blank'
    );
  }

  $scope.send = function () {
    $http.get(`${$rootScope.apiUrl}/send-invoice/${$scope.invoiceId}`, {
      headers: {'key' : authToken}
    })
      .then(function (response) {
        $scope.sentFeedback = 'Invoice Sent';
        $location(`invoice/${invoiceId}/step-one`)
      },
        function(errorResponse) {
          $scope.sentFeedback = 'issue sending invoice';
        });
  }
});
