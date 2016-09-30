(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('RDService', RDService);

  /** @ngInject */
  function RDService($http) {
    
    var checkRounding = function(ctnID, today, centerID) {
      return $http.get('/api/roundings/check?'
                      +'ctnID='+ctnID+'&&date='+today+'&&id='+centerID)
                .then(function (response) {
                    return response;
                });
    };
    
    var saveRounding = function(rounding) {
      return $http.post('/api/roundings',
                rounding)
                .then(function (response) {
                    return response;
                });
    };
    
    var rdData = {"id":null};
    
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