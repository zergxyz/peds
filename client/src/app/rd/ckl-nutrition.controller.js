(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('NutritionModalCtrl', NutritionModalCtrl);

  /** @ngInject */
function NutritionModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update nutrition: 
       RDService.rdData.nutrition     = RDService.detail.gi_n_y1+
                                        RDService.detail.gi_n_y2+
                                        RDService.detail.gi_n_y3+
                                        RDService.detail.gi_n_y4+
                                        RDService.detail.gi_n_y5+
                                        RDService.detail.gi_n_n1+
                                        RDService.detail.gi_n_n2+
                                        RDService.detail.gi_n_n3+
                                        RDService.detail.gi_n_n4+
                                        RDService.detail.gi_n_n5+
                                        RDService.detail.gi_n_n6;
                                      
                                        
        RDService.saveRounding(RDService.rdData).then(
            function(response) {
            }
        );

        $uibModalInstance.close();
        e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.gi_n_y1',  function () {
        if(RDService.detail.gi_n_y1) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
            $scope.rd.gi_n_n5= "";
            $scope.rd.gi_n_n6= "";
        }
    });
    $scope.$watch('rd.gi_n_y2',  function () {
        if(RDService.detail.gi_n_y2) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
            $scope.rd.gi_n_n5= "";
            $scope.rd.gi_n_n6= "";
        }
    });
    $scope.$watch('rd.gi_n_y3',  function () {
        if(RDService.detail.gi_n_y3) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
            $scope.rd.gi_n_n5= "";
            $scope.rd.gi_n_n6= "";
        }
    });
    $scope.$watch('rd.gi_n_y4',  function () {
        if(RDService.detail.gi_n_y4) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
            $scope.rd.gi_n_n5= "";
            $scope.rd.gi_n_n6= "";
        }
    });
    $scope.$watch('rd.gi_n_y5',  function () {
        if(RDService.detail.gi_n_y5) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
            $scope.rd.gi_n_n5= "";
            $scope.rd.gi_n_n6= "";
        }
    });
    
    $scope.$watch('rd.gi_n_n1',  function () {
        if(RDService.detail.gi_n_n1) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
            $scope.rd.gi_n_y4= "";
            $scope.rd.gi_n_y5= "";
        }
    });
    $scope.$watch('rd.gi_n_n2',  function () {
        if(RDService.detail.gi_n_n2) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
            $scope.rd.gi_n_y4= "";
            $scope.rd.gi_n_y5= "";
        }
    });
    $scope.$watch('rd.gi_n_n3',  function () {
        if(RDService.detail.gi_n_n3) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
            $scope.rd.gi_n_y4= "";
            $scope.rd.gi_n_y5= "";
        }
    });
    $scope.$watch('rd.gi_n_n4',  function () {
        if(RDService.detail.gi_n_n4) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
            $scope.rd.gi_n_y4= "";
            $scope.rd.gi_n_y5= "";
        }
    });
    $scope.$watch('rd.gi_n_n5',  function () {
        if(RDService.detail.gi_n_n5) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
            $scope.rd.gi_n_y4= "";
            $scope.rd.gi_n_y5= "";
        }
    });
    $scope.$watch('rd.gi_n_n6',  function () {
        if(RDService.detail.gi_n_n6) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
            $scope.rd.gi_n_y4= "";
            $scope.rd.gi_n_y5= "";
        }
    });
    
  
    
   
    
    
  }
  
  
  
})();
