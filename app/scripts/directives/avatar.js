'use strict';

todoApp.directive('avatar', function() {
  return {
    scope: {
      minionName: '='
    },
    restrict: 'E',
    template: '<div class="avatar">' +
                '<img ng-src="img/{{minionName}}.jpg" class="thumbnail">' +
                '<h4>{{minionName}}</h4>' +
              '</div>'
  };
});
