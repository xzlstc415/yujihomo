(function() {
  'use strict';

  var ProfileController = function(currentUser, User, $auth, toastr, usSpinnerService, ErrorMessageHandler) {
    var vm = this;
    vm.currentUser = currentUser;

    var updateUser = function() {
      usSpinnerService.spin('spinner-1');
      User.update(vm.currentUser, vm.avatar)
        .then(function(res) {
          usSpinnerService.stop('spinner-1');
          $auth.setToken(res.data.token);
          vm.currentUser = User.currentUser();
          toastr.success('プロフィールを更新しました!')
        })
        .catch(function(res) {
          usSpinnerService.stop('spinner-1');
          ErrorMessageHandler.displayErrors(res);
        });
    };

    vm.updateUser = updateUser;
  };

  ProfileController.$inject = [
    'currentUser',
    'User',
    '$auth',
    'toastr',
    'usSpinnerService',
    'ErrorMessageHandler'
  ];

  angular.module('yujihomo')
    .controller('ProfileController', ProfileController);
})();
