<!DOCTYPE html>
<html ng-app="App">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <base href="/play/project-redwood/">

    <!-- Angular files -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script> -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script> -->

    <!-- Angular Packages -->
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/angular-animate/angular-animate.js"></script>
    <script src="node_modules/angular-aria/angular-aria.min.js"></script>
    <script src="node_modules/angular-material/angular-material.min.js"></script>
    <script src="node_modules/moment/moment.js"></script>


    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-cookies.js"></script>

    <!-- Route -->
    <script type="text/javascript" src="route.js"></script>

    <!-- Controllers -->
    <script src="controllers/register-controller.js" type="text/javascript"></script>
    <script src="controllers/home-controller.js" type="text/javascript"></script>
    <script src="controllers/login-controller.js" type="text/javascript"></script>
    <script src="controllers/sidebar-controller.js" type="text/javascript"></script>
    <script src="controllers/invoices-controller.js" type="text/javascript"></script>
    <script src="controllers/invoice-controller.js" type="text/javascript"></script>
    <script src="controllers/quote-controller.js" type="text/javascript"></script>
    <script src="controllers/settings-controller.js" type="text/javascript"></script>

    <title>Project Redwood</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/twbs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="css/dashboard.css" rel="stylesheet">
    <script src="assets/js/ie-emulation-modes-warning.js"></script>

    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css">
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/form.css" rel="stylesheet">
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div ng-view> </div>
      </div>
    </div>
  </body>
</html>
