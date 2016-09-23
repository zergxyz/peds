(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('TransfusionModalCtrl', TransfusionModalCtrl);

  /** @ngInject */
function TransfusionModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    $scope.ok = function(e) {
       //update pain:
       RDService.rdData.transfusion   = RDService.detail.hem_t_y1+
                                        RDService.detail.hem_t_y2+
                                        RDService.detail.hem_t_y3+
                                        RDService.detail.hem_t_y4+
                                        RDService.detail.hem_t_y5+
                                        RDService.detail.hem_t_n1+
                                        RDService.detail.hem_t_n2;
       RDService.saveRounding(RDService.rdData).then(
           function(response) {
               $uibModalInstance.close();
               e.stopPropagation();
           }
       );

    };


    $scope.$watch('rd.hem_t_y1',  function () {
        if(RDService.detail.hem_t_y1) {
            $scope.rd.hem_t_n1= "";
            $scope.rd.hem_t_n2= "";
        }
    });
    $scope.$watch('rd.hem_t_y2',  function () {
        if(RDService.detail.hem_t_y2) {
            $scope.rd.hem_t_n1= "";
            $scope.rd.hem_t_n2= "";
        }
    });
    $scope.$watch('rd.hem_t_y3',  function () {
        if(RDService.detail.hem_t_y3) {
            $scope.rd.hem_t_n1= "";
            $scope.rd.hem_t_n2= "";
        }
    });
    $scope.$watch('rd.hem_t_y4',  function () {
        if(RDService.detail.hem_t_y4) {
            $scope.rd.hem_t_n1= "";
            $scope.rd.hem_t_n2= "";
        }
    });
    $scope.$watch('rd.hem_t_y5',  function () {
        if(RDService.detail.hem_t_y5) {
            $scope.rd.hem_t_n1= "";
            $scope.rd.hem_t_n2= "";
        }
    });

    $scope.$watch('rd.hem_t_n1',  function () {
        if(RDService.detail.hem_t_n1) {
            $scope.rd.hem_t_y1= "";
            $scope.rd.hem_t_y2= "";
            $scope.rd.hem_t_y3= "";
            $scope.rd.hem_t_y4= "";
            $scope.rd.hem_t_y5= "";
        }
    });
    $scope.$watch('rd.hem_t_n2',  function () {
        if(RDService.detail.hem_t_n2) {
            $scope.rd.hem_t_y1= "";
            $scope.rd.hem_t_y2= "";
            $scope.rd.hem_t_y3= "";
            $scope.rd.hem_t_y4= "";
            $scope.rd.hem_t_y5= "";
        }
    });




  }



})();
