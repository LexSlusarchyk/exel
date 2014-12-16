'use strict';

angular.module('exel.version', [
  'exel.version.interpolate-filter',
  'exel.version.version-directive'
])

.value('version', '0.1');
