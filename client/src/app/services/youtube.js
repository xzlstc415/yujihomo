(function() {

  var YoutubeVideo = function($http) {
    var vm = this;

    var query = function(params) {
      var req = {
        method: 'GET',
        url: '/api/youtube_videos',
        params: params
      };

      return $http(req);
    };

    var save = function() {
      req = {
        method: 'POST',
        url: '/api/youtube_videos'
      };

      return $http(req);
    };

    var update = function(id, params) {
      var req = {
        method: 'PUT',
        url: '/api/youtube_videos/' + id,
        data: params
      };

      return $http(req);
    };

    var autocomplete = function(keyParams) {
      var req = {
        method: 'GET',
        url: '/api/youtube_videos/autocomplete',
        params: keyParams
      };

      return $http(req);
    };

    vm.query = query;
    vm.save = save;
    vm.update = update;
    vm.autocomplete = autocomplete;

    return vm;
  };

  YoutubeVideo.$inject = ['$http'];

  angular.module('yujihomo')
    .service('YoutubeVideo', YoutubeVideo);
})();
