(function() {
  'use strict';

  angular
    .module('inspinia')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
