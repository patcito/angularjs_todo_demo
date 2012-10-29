'use strict';

todoApp.directive('avatar', function() {
  return {
    scope: {
      userName: '='
    },
    restrict: 'E',
    template: '<div class="avatar">' +
                '<img ng-src="img/{{userName}}.jpg" class="thumbnail">' +
                '<h4>{{userName}}</h4>' +
              '</div>'
  };
});
