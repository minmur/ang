'use strict';

describe('Service: markups', function () {

  // load the service's module
  beforeEach(module('angApp'));

  // instantiate service
  var markups;
  beforeEach(inject(function (_markups_) {
    markups = _markups_;
  }));

  it('should do something', function () {
    expect(!!markups).toBe(true);
  });

});
