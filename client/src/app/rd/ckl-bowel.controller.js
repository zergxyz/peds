(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('BowelModalCtrl', BowelModalCtrl);

  /** @ngInject */
function BowelModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;


    $scope.ok = function(e) {
        //update bowel:
        RDService.rdData.bowel =        RDService.detail.gi_b_y1+
                                        RDService.detail.gi_b_y2+
                                        RDService.detail.gi_b_y3+
                                        RDService.detail.gi_b_y4+
                                        RDService.detail.gi_b_n1+
                                        RDService.detail.gi_b_n2+
                                        RDService.detail.gi_b_n3;

        RDService.saveRounding(RDService.rdData).then(
            function(response) {
            }
        );

        $uibModalInstance.close();
        e.stopPropagation();
    };


    $scope.$watch('rd.gi_b_y1',  function () {
        if(RDService.detail.gi_b_y1) {
            $scope.rd.gi_b_n1= "";
            $scope.rd.gi_b_n2= "";
            $scope.rd.gi_b_n3= "";
        }
    });
    $scope.$watch('rd.gi_b_y2',  function () {
            if(RDService.detail.gi_b_y2) {
                $scope.rd.gi_b_n1= "";
                $scope.rd.gi_b_n2= "";
                $scope.rd.gi_b_n3= "";
            }
        });
    $scope.$watch('rd.gi_b_y3',  function () {
            if(RDService.detail.gi_b_y3) {
                $scope.rd.gi_b_n1= "";
                $scope.rd.gi_b_n2= "";
                $scope.rd.gi_b_n3= "";
            }
        });
    $scope.$watch('rd.gi_b_y4',  function () {
            if(RDService.detail.gi_b_y4) {
                $scope.rd.gi_b_n1= "";
                $scope.rd.gi_b_n2= "";
                $scope.rd.gi_b_n3= "";
            }
        });

    $scope.$watch('rd.gi_b_n1',  function () {
        if(RDService.detail.gi_b_n1) {
            $scope.rd.gi_b_y1= "";
            $scope.rd.gi_b_y2= "";
            $scope.rd.gi_b_y3= "";
            $scope.rd.gi_b_y4= "";
        }
    });
    $scope.$watch('rd.gi_b_n2',  function () {
            if(RDService.detail.gi_b_n2) {
                $scope.rd.gi_b_y1= "";
                $scope.rd.gi_b_y2= "";
                $scope.rd.gi_b_y3= "";
                $scope.rd.gi_b_y4= "";
            }
        });
    $scope.$watch('rd.gi_b_n3',  function () {
            if(RDService.detail.gi_b_n3) {
                $scope.rd.gi_b_y1= "";
                $scope.rd.gi_b_y2= "";
                $scope.rd.gi_b_y3= "";
                $scope.rd.gi_b_y4= "";
            }
        });
    $scope.$watch('rd.gi_b_n4',  function () {
            if(RDService.detail.gi_b_n4) {
                $scope.rd.gi_b_y1= "";
                $scope.rd.gi_b_y2= "";
                $scope.rd.gi_b_y3= "";
                $scope.rd.gi_b_y4= "";
            }
        });




  }



})();
