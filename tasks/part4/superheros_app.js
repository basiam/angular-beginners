var superheroApp = angular.module('superheroApp', ['ui.bootstrap', 'ngRoute']);

superheroApp.config(function ($routeProvider) {
  console.log($routeProvider);
  $routeProvider
    .when('/', {template:  '<img src="../../assets/images/superman.jpg" alt="Superman"/>' })
    .when('/batman', {template: '<img src="../../assets/images/batman.jpg" alt="Batman"/>'  })
    /* SOMETHING IS MISSING HERE */

});
