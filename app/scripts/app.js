'use strict';

/**
 * @ngdoc overview
 * @name proyectoApp
 * @description
 * # proyectoApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider,$stateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/dispositivos', {
        templateUrl: 'views/dispositivos.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/recarga', {
        templateUrl: 'views/recarga.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/historial', {
        templateUrl: 'views/historial.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });

      // $stateProvider
      // .state('dispositivos',{
      //   url:'/dispositivos',
      //   templateUrl:'views/dispositivos.html',
      //   controller:'AboutCtrl'
      // })
      //
      // .state('recarga',{
      //   url:'/recarga',
      //   templateUrl:'views/recarga.html',
      //   controller:'AboutCtrl'
      // })


  });
