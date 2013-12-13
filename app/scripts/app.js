'use strict';

angular.module('odiometroApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dos', {
          templateUrl: 'views/dos.html',
          controller: 'DoscontrollerCtrl'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'DoscontrollerCtrl'
      })
      .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'DoscontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
