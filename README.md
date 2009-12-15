KeySequence
===========

Create custom events for sequences of key presses.

![Screenshot](http://benlenarts.github.com/KeySequence/images/asdf.png)

How to use
----------

Create a custom event by calling `addKeySequence` with an event name and an array of key names:

	#JS
	Element.Events.addKeySequence('konamicode', 'up up down down left right left right b a'.split(' ')); 
	
Now you can attach handlers to this new event:

	#JS
	document.addEvent('konamicode', function() { alert('KONAMI'); });

