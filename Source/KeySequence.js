/*
---
description: provides the Element.Events.addKeySequence function to create custom events for sequences of key presses.

license: MIT-style

authors:
- Ben Lenarts

requires:
  core/1.2.4: '*'
# actually:
# - core/1.2.4: Element.Event

provides: [Element.Events.addKeySequence]

...
*/

(function() {

function keycombo(event) {
  var mods = '';
  if (event.shift) mods += 'shift-';
  if (event.control) mods += 'control-';
  if (event.alt) mods += 'alt-';
  if (event.meta) mods += 'meta-';
  return mods + event.key;
}

Element.Events.addKeySequence = function(name, sequence, options) {
  options = options || {};
  var withModifiers = options.withModifiers !== false;

  var buffer = new Array(sequence.length);
  var target = sequence.toString();

  Element.Events[name] = {
    base: 'keyup',
    condition: function(event) {
      if (!event.key || event.key.getCharCode(0) < 32) return false;
      buffer.shift();
      buffer.push(withModifiers ? keycombo(event) : event.key);
      return buffer.toString() == target;
    }
  }
}

})();
