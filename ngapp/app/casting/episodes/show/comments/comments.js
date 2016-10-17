(function() {
  'use strict';

  var stateConfig = function($stateProvider) {
    $stateProvider
      .state('episodes-comments', {
        url:'/',
        parent: 'episodes-detail',
        views: {
          'comments@episodes-detail': {
            templateUrl: 'app/casting/episodes/show/comments/comments.tmpl.html'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  angular.module('yujihomo').config(stateConfig);
})();
