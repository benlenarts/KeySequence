/*
---
description: provides the Element.Events.addKeySequence function to create custom events for sequences of key presses.

license: MIT-style

authors:
- Ben Lenarts

requires:
- core:1.2.4: Element.Event

provides: [Element.Events.addKeySequence]

...
*/

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
