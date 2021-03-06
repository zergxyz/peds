(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('ADMService', Admission);

  /** @ngInject */
  function Admission($http, localStorageService) {
    
    var data = {
      rfa: '',
      history:''
    }
    
    var getCurrentAdmissions = function(credentials) {
      var center_id = localStorageService.get('user').center.id;
      return $http.get('/api/admissions/'+center_id)
                .then(function (response) {
                    return response;
                });
    };
    
    var saveAdmission = function(adm) {
      return $http.post('/api/admissions',
                adm)
                .then(function (response) {
                    return response;
                });
    };
    
    var reAdmit = function(adm) {
      return $http.post('/api/admissions/readmit',
                adm)
                .then(function (response) {
                    return response;
                });
    };

    var discharge = function(adm) {
      return $http.post('/api/admissions/discharge',
                adm)
                .then(function (response) {
                    return response;
                });
    };
    
    return   {
      data:data,
      getCurrentAdmissions:getCurrentAdmissions,
      saveAdmission:saveAdmission,
      reAdmit:reAdmit,
      discharge:discharge
    }
    
  }
})();