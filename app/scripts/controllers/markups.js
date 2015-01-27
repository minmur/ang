'use strict';

/**
 * @ngdoc function
 * @name angApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angApp
 */
angular.module('angApp')

  .controller('MarkupsCtrl', function ($scope, markups) {
    $scope.markups = markups.getMarkups('Air');
  })

  .controller('MarkupCtrl', function ($scope, $state, $stateParams, markups) {
    $scope.markup = markups.getById($stateParams.id);

    $scope.remove = function (index) {
      $scope.markup.Rules.splice(index, 1);
    };

    $scope.save = function () {
      if (!$scope.markupForm.$valid) {
        return;
      }
      //@TODO: send data to the api
      $state.go('markups.list');
    };
  })

  .controller('NewRuleFormController', function ($scope) {
    $scope.ruleTypes = [{
      type: 'AnyIATARuleType',
      display: 'Any IATA'
    }, {
      type: 'NumberOfSegmentsRuleType',
      display: 'Number of Segments'
    }, {
      type: 'PassengersRuleType',
      display: 'Number of Passengers'
    }];

    $scope.validators = [{
      type: 'ContainsOneOfValidator',
      display: 'Contains one of'
    }];

    $scope.ruleType = $scope.ruleTypes[0];
    $scope.validator = $scope.validators[0];

    $scope.submit = function () {
      $scope.markup.Rules.push({
        RuleType: $scope.ruleType.type,
        RuleTypeDisplay: $scope.ruleType.display,
        Validator: $scope.validator.type,
        ValidatorDisplay: $scope.validator.display,
        Values: [{ JsonValue: '' }]
      });
    };

  });
