var App = angular.module("App", ["ngRoute"]);

App.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/quote', {
    templateUrl: 'views/quote.html',
    controller: 'QuoteController',
  })
  .when('/create-account', {
    templateUrl: 'views/create-account.html',
    controller: 'CreateAccountController',
  })
  .when('/invoice', {
    templateUrl: 'views/invoice.html',
    controller: 'InvoiceController',
  }).otherwise({
    redirectTo: '/home'
  });

  $locationProvider.html5Mode(true);
}]);

var HomeController = App.controller("HomeController", function ($scope) {
  console.log('Home Controller !!!');
});

var QuoteController = App.controller("QuoteController", function ($scope) {
  console.log('Quote Controller');
});

var InvoiceController = App.controller("InvoiceController", function ($scope) {
  console.log('Invoice Controller');
});

var CreateAccountController = App.controller("CreateAccountController", function ($scope) {

});

var LoginController = App.controller("LoginController", function ($scope) {

});
