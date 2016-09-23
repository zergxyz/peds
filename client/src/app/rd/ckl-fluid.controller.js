(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('FluidModalCtrl', FluidModalCtrl);

  /** @ngInject */
function FluidModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update fluid:
       RDService.rdData.fluid         = RDService.detail.kidney_f_y1+
                                        RDService.detail.kidney_f_y2+
                                        RDService.detail.kidney_f_y3+
                                        RDService.detail.kidney_f_y4+
                                        RDService.detail.kidney_f_n1+
                                        RDService.detail.kidney_f_n2;
                                      
        RDService.saveRounding(RDService.rdData).then(
            function(response) {
                $uibModalInstance.close();
                e.stopPropagation();
            }
        );
    };

    
    $scope.$watch('rd.kidney_f_y1',  function () {
        if(RDService.detail.kidney_f_y1) {
            $scope.rd.kidney_f_n1= "";
            $scope.rd.kidney_f_n2= "";
        }
    });
     $scope.$watch('rd.kidney_f_y2',  function () {
        if(RDService.detail.kidney_f_y2) {
            $scope.rd.kidney_f_n1= "";
            $scope.rd.kidney_f_n2= "";
        }
    });
     $scope.$watch('rd.kidney_f_y3',  function () {
        if(RDService.detail.kidney_f_y3) {
            $scope.rd.kidney_f_n1= "";
            $scope.rd.kidney_f_n2= "";
        }
    });
     $scope.$watch('rd.kidney_f_y4',  function () {
        if(RDService.detail.kidney_f_y4) {
            $scope.rd.kidney_f_n1= "";
            $scope.rd.kidney_f_n2= "";
        }
    });
    
    $scope.$watch('rd.kidney_f_n1',  function () {
        if(RDService.detail.kidney_f_n1) {
            $scope.rd.kidney_f_y1= "";
            $scope.rd.kidney_f_y2= "";
            $scope.rd.kidney_f_y3= "";
            $scope.rd.kidney_f_y4= "";
        }
    });
    $scope.$watch('rd.kidney_f_n2',  function () {
        if(RDService.detail.kidney_f_n2) {
            $scope.rd.kidney_f_y1= "";
            $scope.rd.kidney_f_y2= "";
            $scope.rd.kidney_f_y3= "";
            $scope.rd.kidney_f_y4= "";
        }
    });
 
 
    
    
  }
  
  
  
})();
