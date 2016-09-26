(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SkinModalCtrl', SkinModalCtrl);

  /** @ngInject */
function SkinModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update skin:
       RDService.rdData.skin          = RDService.detail.skin_s_y1+
                                        RDService.detail.skin_s_y2+
                                        RDService.detail.skin_s_y3+
                                        RDService.detail.skin_s_n1;
                                      
                                        
        RDService.saveRounding(RDService.rdData).then(
            function(response) {
                $uibModalInstance.close();
                e.stopPropagation();
            }
        );
    };

    
    $scope.$watch('rd.skin_s_y1',  function () {
        if(RDService.detail.skin_s_y1) {
            $scope.rd.skin_s_n1= "";
        }
    });
     $scope.$watch('rd.skin_s_y2',  function () {
        if(RDService.detail.skin_s_y2) {
            $scope.rd.skin_s_n1= "";
        }
    });
     $scope.$watch('rd.skin_s_y3',  function () {
        if(RDService.detail.skin_s_y3) {
            $scope.rd.skin_s_n1= "";
        }
    });
    
     $scope.$watch('rd.skin_s_n1',  function () {
        if(RDService.detail.skin_s_n1) {
            $scope.rd.skin_s_y1= "";
            $scope.rd.skin_s_y2= "";
            $scope.rd.skin_s_y3= "";
        }
    });
  
    

    
    
  }
  
  
  
})();
