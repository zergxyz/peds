(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('DemoController', DemoController);

  /** @ngInject */
  function DemoController( Auth, $state, $uibModal, localStorageService, 
                          ADMService, CurPTService) {

    if(!localStorageService.get('user')) {
        $state.go("signin");
    }
    
    var vm = this;
    vm.user = localStorageService.get("user");
    vm.logout = function () {
        localStorageService.remove("user");
        $state.go("signin");
    }
    
    ADMService.getCurrentAdmissions().then(
      function (response) {
        vm.adms = response.data
    });
    // vm.dashboard = function () {
    //   $state.go('dashboard');
    // }
    
    vm.ptView = function(adm){
      CurPTService.adm = adm;
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/adm/ptview.html',
        controller: 'PTViewModalCtrl',
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    
    
    

  }
})();
