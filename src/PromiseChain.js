define('src/PromiseChain', [], function() {

  function PromiseChain() {
    this._list = [];
    this._updateLast();
  }

  PromiseChain.prototype = {
    then: function(callback) {
      this._last.then(callback);
    },
    catch: function(callback) {
      this._last.catch(callback)
    },
    append: function(promisePtr) {
      if (this._last) {
        this._last.then(promisePtr);
      }
      this._list.push(promisePtr);
      this._updateLast();
    },
    _updateLast: function() {
      this._last = this._list[this._list.length - 1];
    }
  }

  return PromiseChain;
});
