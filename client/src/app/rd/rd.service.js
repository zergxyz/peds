(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('RDService', RDService);

  /** @ngInject */
  function RDService($http) {
    
    var checkRounding = function(ctnID, today, centerID) {
      alert("call api with "+ctnID+" "+today+" "+centerID);
      return $http.get('http://localhost:8080/peds/api/roundings/check?'
                      +'ctnID='+ctnID+'&&date='+today+'&&id='+centerID)
                .then(function (response) {
                    return response;
                });
    };
    
    var saveRounding = function(rounding) {
      return $http.post('http://localhost:8080/peds/api/roundings',
                rounding)
                .then(function (response) {
                    return response;
                });
    };
    
    var rdData = {};
    
    var detail = {};
    
    var clearRound= function() {
       //do nothing here
    };
    

    
    return   {
      rdData:rdData,
      detail:detail,
      clearRound:clearRound,
      checkRounding:checkRounding,
      saveRounding:saveRounding
    }
    
  }
})();