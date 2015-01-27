'use strict';

/**
 * @ngdoc overview
 * @name angApp
 * @description
 * # angApp
 *
 * Main module of the application.
 */
angular
  .module('angApp', [
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/markups');

    $stateProvider
      .state('markups', {
        url: '/markups',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('markups.list', {
        url: '',
        templateUrl: '../views/list.html',
        controller: 'MarkupsCtrl'
      })
      .state('markups.view', {
        url: '/:id',
        templateUrl: '../views/view.html',
        controller: 'MarkupCtrl'
      });
  });
