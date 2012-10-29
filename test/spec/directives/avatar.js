'use strict';

describe('Directive: avatar', function() {
  beforeEach(module('todoApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<avatar></avatar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the avatar directive');
  }));
});
