KeySequence
===========

Provides a function to create custom events for sequences of key presses.

How to use
----------

Create a custom event by calling addKeySequence with an event name and an array of key names:

	#JS
	Element.Events.addKeySequence('konamicode', 'up up down down left right left right b a'.split(' ')); 
  
Now you can use this new event and attach handlers to it:

  #JS
  document.addEvent('konamicode', function() {
    alert('KONAMI');
  });

