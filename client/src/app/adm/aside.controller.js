(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('AsideController', AsideController);

  /** @ngInject */
function AsideController($scope, $uibModalInstance,
            CurPTService, $state, RDService) {

          $scope.ptlist = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
            $state.go("demo");
          };
          $scope.rounding = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
            //check the rounding service here
            var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            var today=[year, month, day].join('-');
            RDService.checkRounding(CurPTService.adm.ctnID,
                    today, CurPTService.adm.center.id).then(
                      function (response) {
                        RDService.rdData =response.data;
                        RDService.detail = response.data.rdetail;
                        $state.go('checklist');
            });
          };
  }
  
  
  
})();
