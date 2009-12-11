Element.Events.addKeySequence = function(name, sequence) {
  var buffer = new Array(sequence.length);
  var target = sequence.toString();

  Element.Events[name] = {
    base: 'keyup',
    condition: function(event) {
      buffer.shift();
      buffer.push(event.key);
      return buffer.toString() == target;
    }
  }
}
