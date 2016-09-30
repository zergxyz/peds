(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('MedsModalCtrl', MedsModalCtrl);

  /** @ngInject */
function MedsModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update meds:
       RDService.rdData.meds          = RDService.detail.med_m_y1+
                                        RDService.detail.med_m_y2+
                                        RDService.detail.med_m_y3+
                                        RDService.detail.med_m_y4+
                                        RDService.detail.med_m_y5+
                                        RDService.detail.med_m_y6+
                                        RDService.detail.med_m_n1+
                                        RDService.detail.med_m_n2;

       RDService.saveRounding(RDService.rdData).then(
            function(response) {

            }
       );
        $uibModalInstance.close();
        e.stopPropagation();
    };

    
    $scope.$watch('rd.med_m_y1',  function () {
        if(RDService.detail.med_m_y1) {
            $scope.rd.med_m_n1= "";
            $scope.rd.med_m_n2= "";
        }
    });
    $scope.$watch('rd.med_m_y2',  function () {
        if(RDService.detail.med_m_y2) {
            $scope.rd.med_m_n1= "";
            $scope.rd.med_m_n2= "";
        }
    });
    $scope.$watch('rd.med_m_y3',  function () {
            if(RDService.detail.med_m_y3) {
                $scope.rd.med_m_n1= "";
                $scope.rd.med_m_n2= "";
            }
        });
    $scope.$watch('rd.med_m_y4',  function () {
            if(RDService.detail.med_m_y4) {
                $scope.rd.med_m_n1= "";
                $scope.rd.med_m_n2= "";
            }
        });
    $scope.$watch('rd.med_m_y5',  function () {
            if(RDService.detail.med_m_y5) {
                $scope.rd.med_m_n1= "";
                $scope.rd.med_m_n2= "";
            }
        });
    $scope.$watch('rd.med_m_y6',  function () {
            if(RDService.detail.med_m_y6) {
                $scope.rd.med_m_n1= "";
                $scope.rd.med_m_n2= "";
            }
        });
  
    
    $scope.$watch('rd.med_m_n1',  function () {
        if(RDService.detail.med_m_n1) {
            $scope.rd.med_m_y1= "";
            $scope.rd.med_m_y2= "";
            $scope.rd.med_m_y3= "";
            $scope.rd.med_m_y4= "";
            $scope.rd.med_m_y5= "";
            $scope.rd.med_m_y6= "";
        }
    });
    $scope.$watch('rd.med_m_n2',  function () {
            if(RDService.detail.med_m_n2) {
                $scope.rd.med_m_y1= "";
                $scope.rd.med_m_y2= "";
                $scope.rd.med_m_y3= "";
                $scope.rd.med_m_y4= "";
                $scope.rd.med_m_y5= "";
                $scope.rd.med_m_y6= "";
            }
    });
  
    

    
    
  }
  
  
  
})();
