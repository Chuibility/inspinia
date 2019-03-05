####VERSION:	1.1.0
####RELEASED:	03/10/2014
####AUTHOR:		TODD HORST
-------

This is the first release I'm in charge of, and as such, I've made the project my own. Hopefully things work well, and we can 
keep this project evolving. Please feel free to submit requests for feature.

#####SRC

Fixed:
* if users set idle=true and left startImmediately=true ( the default ), it would toggle incorrectly
* opts references (changed to obj) in toggleIdleState
* chaining on all functions
* mousemove issues experienced in chrome & iOS7 #4
* every time you called a function (say getElapsedTime), it would reset olddate, so you were getting elapsed from last getElapsedTime, not actual time from last state change
* can now call functions on default binding ex $.idleTimer("pause");
* can now call default binding with parameter $.idleTimer({idle:true});
* destroy doesnt remove bindings user added, only internally bound events

Added:
* reset, pause/resume #19
* getRemainingTime, getLastActiveTime (supports autologout demo), isIdle (state of object)
* internally documentation for obj keys
* element, trigger event, and (copy of) object are parameters to raised idle/active event
* `wheel` event. wheel is to replace DOMMouseScroll & mousewheel. We could remove DOMMouseScroll now as its technically not needed to support firefox n-1. mousewheel will stick around until we drop ie8.
* `MSPointerDown` `MSPointerMove` events #22
* ability to send only settings parameter
* Ability to sync timer state across browser tabs

Update:
* changed $().data() to jQuery.data() for speed
* removed myelem in toggleIdleState and replaced with elem


###Breaking Changes

NOTE:
I realize these changes could upset some people. If you need something added back, please open a ticket. If its determined that 
these are necessary, I will be happy to put them back. They were removed to clean up the code or fix bugs. You can of course continue
using the old version.

* Passing timeout AND settings is no longer valid. Example: `$( document ).idleTimer(3000, {idle:true});`  Change to  `$( document ).idleTimer({timeout:3000,idle:true});`
* Using `$( document ).data("idleTimer");` returned a string. This is less ideal. Start using `$( document ).idleTimer("isIdle");` 
	to get a boolean value of the current state of the element. If you need the string use: 
	`var state = $( document ).idleTimer("isIdle") ? "idle" : "active"`
* `Enabled` param has been removed. If needed dont initialize idleTimer until you need it. Previously there was no way to enable
	once it was disabled anyway, unless manually modifying the internal data. You may also want to look at reset (resets data/state without removing
	bindings) and pause (stops timer until resumed)
* `StartImmediately` param has been removed. If you need to not have the timer start set `idle` setting to true. This was redundant and
	could cause a bug if users didn't flip both `idle` and `startImmediately`
* Firefox lateness bug fix, Firefox has updated their implementation, so there is no need to have added code to support intended 
	browsers. Besides I always look at elem instead of local instance on myelem now
* Chrome "alert triggers event" bugfix, I believe Chrome has fixed this, if you still experience the issue let me know and I'll put it back
	but I was unable to reproduce this



###DEMO

* Updated jQuery to newest (1.11.0)
* Remove jQuery UI (was used for dialog)
* Added bootstrap and standard template
* Added examples of all functions
* Made clearer which log was for document/textarea idletimer
* Stops event propagation on textarea
* Shows default state according to obj idle value
* Added demo for autologout (handles that fact that js gets paused when iOS app gets minimized)
* Added demo with all autobinding

###README

* Link to demo
* Document new functions
* Document supported browsers
* Document jQuery dependency
* Document author history
* Removed note about mixing `$.idleTimer` and `$( document ).idleTimer(...)`, related bugs have been fixed
* General cleanup

###DIST

* Automated builds from travis
* Grunt settings have been updated, so that it builds correctly
* Tests added for new functions, admittedly Im still learning this
* Tests only keydown. Need to test idleTimer not the browser events. Having them all in a loop was unpredictable.

###THOUGHTS
	
I thought about allowing users to send a callback function in, ala most jquery methods. However
after researching and thinking the callbacks would be synchronous and events are async. So we
will be sticking with the current method
