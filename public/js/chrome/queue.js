function Queue(processor) {
  this.queue = [];
  this.isReady = false;
  this.processor = processor;
}

Queue.prototype = {
  ready: function () {
    if (!this.isReady) {
      this.isReady = true;
      this.queue.forEach(this.processor);
    }
  },
  push: function (data) {
    if (this.isReady) {
      this.processor(data);
    } else {
      this.queue.push(data);
    }
  }
};

