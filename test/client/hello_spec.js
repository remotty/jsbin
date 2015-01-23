(function(){
  'use strict';
  
  describe("karma and mocha testing", function() {
    it ("return hello", function() {
      expect(hello()).to.equal("hello");
    });
  });

})();
