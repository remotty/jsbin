function Queue(processor) {
  'use strict';
  
  this.queue = [];
  this.isReady = false;
  this.processor = processor;
}

Queue.prototype = {
  ready: function () {
    'use strict';
    
    if (!this.isReady) {
      this.isReady = true;
      this.queue.forEach(this.processor);
    }
  },
  push: function (data) {
    'use strict';
    
    if (this.isReady) {
      this.processor(data);
    } else {
      this.queue.push(data);
    }
  }
};

