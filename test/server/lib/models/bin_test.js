var test_helper = require('../../test_helper.js'),
    assert = test_helper.assert,
    Bin = require("../../../../lib/models/bin.js"),

bin = new Bin(test_helper.store);

describe('Bin Model', function(){
  beforeEach(function(done){
    // this.timeout(10000);
    bin.create_with_name({
      url: 'hello_twosome',
      revision: 1,
      latest: true
    }, function(err){
      if(err){
        console.log(err);
      }
      done();
    });
  });
  
  afterEach(function(done){
    bin.store.removeAllBins({}, function(err){
      if(err){
        console.log(err);
      }
      
      done();
    });
  });

  describe('create_with_name', function(){
    it('can\'t register new bin because of duplicated name.', function(done){
      bin.create_with_name({
        url: 'hello_twosome',
        revision: 1,
        latest: true
      }, function(err){
        if(err){
          assert.equal("This name already taken.", err);
        }
        done();
      });
    });

    it('can register new bin when use another name', function(done){
      bin.create_with_name({
        url: 'hello_onesome',
        revision: 1,
        latest: true
      }, function(err){
        if(err){
          assert.equal(null, err);
        }
        done();
      });
    });
  });
  
  describe('binExistsByName', function(){
    it('There is hello_twosome bin', function(done){
      bin.store.binExistsByName('hello_twosome', function(err, is_exists){
        if(err){
          console.log(err);
        }

        assert.equal(true ,is_exists);
        done();
      });
    });

    it('There isn\'t hello_onesome bin', function(done){
      bin.store.binExistsByName('hello_onesome', function(err, is_exists){
        if(err){
          console.log(err);
        }

        assert.equal(false ,is_exists);
        done();
      });
    });
  });
  
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

after(function() {
  test_helper.store.disconnect();
});
