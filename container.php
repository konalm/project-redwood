<!DOCTYPE html>
<html ng-app="App">
<head>
  <base href="/play/project-redwood/">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.min.js"></script>
  <script type="text/javascript" src="route.js"></script>
  <title> Container </title>
</head>

<body>

  <div id="header">
    <h4> Header </h4>
  </div>

  <!-- The View -->
  <div ng-view>

  </div>

  <div id="footer">
    <h4> Footer </h4>
  </div>

</body>
</html>
