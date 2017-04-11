var App = angular.module("App", ["ngRoute", "ngCookies"]);

App.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/sign-in', {
    templateUrl: 'views/sign-in.html',
    controller: 'LoginController',
  })
  .when('/sign-up', {
    templateUrl: 'views/sign-up.html',
    controller: 'RegisterController',
  })
  .when('/quote', {
    templateUrl: 'views/quote.html',
    controller: 'QuoteController',
  })
  .when('/invoices', {
    templateUrl: 'views/invoices.html',
    controller: 'InvoicesController',
  })
  .when('/invoice/new', {
    templateUrl: 'views/invoice-new.html',
    controller: 'InvoicesController'
  })
  .when('/invoice/:invoiceId', {
    templateUrl: 'views/invoice.html',
    controller: 'InvoiceController'
  })
  .when('/invoice/:invoiceId/preview', {
    templateUrl:'views/invoice-preview.html',
    controller: 'InvoiceController'
  })
  .when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'SettingsController'
  })
  .when('/test', {
    templateUrl: 'views/test.html',
  }).otherwise({
    redirectTo: '/home'
  });

  $locationProvider.html5Mode(true);
}]);

App.run(['$rootScope', function ($rootScope) {
  $rootScope.baseUrl = '/play/project-redwood';
  $rootScope.apiUrl = 'http://localhost:8888/play/sf-backend/web/app_dev.php';

  $rootScope.templates = {
    header: $rootScope.baseUrl + '/views/header.html',
    headerLoggedOut: $rootScope.baseUrl + '/views/header-logged-out.html',
    sidebar: $rootScope.baseUrl + '/views/sidebar.html'
  };
}]);
