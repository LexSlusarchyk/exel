'use strict';

angular.module('exel')
.directive('readMarkup', function() {
  return {
    restrict: 'E',
    scope: {
        mark: '='
    },
    link: function (scope, elem, attrs) {
      scope.$watch('mark', function(mark) {
         if (scope.mark) {
            var html = $.parseHTML(scope.mark)
            elem.append( html );
         }
      })
        
    }
  };
})