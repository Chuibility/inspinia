jQuery Idle Timer Plugin 
========================

[![Build Status](https://travis-ci.org/thorst/jquery-idletimer.svg?branch=master)](https://travis-ci.org/thorst/jquery-idletimer)
[![Dependency Status](https://david-dm.org/thorst/jquery-idletimer.svg?theme=shields.io)](https://david-dm.org/thorst/jquery-idletimer)
[![devDependency Status](https://david-dm.org/thorst/jquery-idletimer/dev-status.svg?theme=shields.io)](https://david-dm.org/thorst/jquery-idletimer#info=devDependencies)
[![Coverage Status](http://img.shields.io/coveralls/thorst/jquery-idletimer.svg)](https://coveralls.io/r/thorst/jquery-idletimer?branch=master)

Demo
--------
http://thorst.github.io/jquery-idletimer/index.html

Download
--------
* [Compressed ~3kb](https://raw.github.com/thorst/jquery-idletimer/master/dist/idle-timer.min.js)
* [Uncompressed ~11kb](https://raw.github.com/thorst/jquery-idletimer/master/dist/idle-timer.js)

Purpose
-------

Fires a custom event when the user is "idle". Idle is defined by not...

* moving the mouse
* scrolling the mouse wheel
* using the keyboard


Usage
-----

There are two ways to instantiate. Either statically, or on an element. Element bound timers 
will only watch for events inside of them. You may just want page-level activity, in which 
case you may set up your timers on `document`, `document.documentElement`, and `document.body`.
Instantiate returns jQuery for chaining.

```javascript
$(function() {
    // binds to document - shorthand
    $.idleTimer();

    // binds to document - explicit
    $( document ).idleTimer();

    // bind to different element
    $( "#myTextArea" ).idleTimer();
});
```

You can configure the settings several ways

```javascript
$(function() {
    // idleTimer() with all defaults
    $( document ).idleTimer( );

    // idleTimer() takes an optional numeric argument that defines just the idle timeout
    // timeout is in milliseconds
    $( document ).idleTimer( 10000 );

    // idleTimer() takes an optional object argument that defines any/all setting
    $( document ).idleTimer( {
        timeout:10000, 
        idle:true
    });

    /*
    *   Here are the possible settings
    *   you can omit any or all of them
    */

    // indicates if the user is idle
    idle [default:false] 

    // the timeout period
    timeout [default:30000] 

    // activity is any one of these events
    events [default:'mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove']

    // If set, the use a localStorage key to sync activity across browser tabs/windows
    timerSyncId [default:null]
});
```

When a users state changes a custom events get triggered. There are several parameters
passed to your handler for you to use

```javascript
$(function() {
    $( document ).on( "idle.idleTimer", function(event, elem, obj){
        // function you want to fire when the user goes idle
    });

    $( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){
        // function you want to fire when the user becomes active again
    });

    /*
    *   Here are the arguments
    */
    // event
    // will be either idle.idleTimer or active.idleTimer
    // use event.stopPropagation(); to stop element from bubbling up to document

    // elem
    // is the element that the event was triggered on

    // obj
    // is a copy of the internal data used by idleTimer

    // triggerevent
    // is the initial event that triggered the element to become active
    // obviously for idle state this will be undefined
});
```

There are several methods to invoke

```javascript
$(function() {
    // stop the timer, removes data, removes event bindings
    // to come back from this you will need to instantiate again
    // returns: jQuery
    $( document ).idleTimer("destroy");

    // save remaining time, and stops the timer
    // returns: jQuery
    $( document ).idleTimer("pause");

    // starts timer with remaining time
    // returns: jQuery
    $( document ).idleTimer("resume");

    // restore initial idle state, and restart the timer
    // returns: jQuery
    $( document ).idleTimer("reset");

    // get time left until idle, if idle return 0
    // returns: number
    $( document ).idleTimer("getRemainingTime");

    // get time elapsed (in ms) since the user went idle/active
    // if idle, how have you been idle, if active, how long have you been active
    // returns: number
    $( document ).idleTimer("getElapsedTime");

    // get time last active event fired
    // returns: number
    $( document ).idleTimer("getLastActiveTime");

    // you can also query if it's "idle" or "active"
    // returns: bool
    $( document ).idleTimer("isIdle");
});
```

Pre-Req
-------
jQuery 1.7 (tested with 1.11.0)

Intended Browser Support
-------
####Desktop
* >=IE8
* Firefox n-1
* Chrome n-1
* Safari n

####Mobile
* iOS n-1
* Android (version?)
* Windows Phone IEMobile/10.0

Links
-------
* [jQuery plugin repo listing](http://plugins.jquery.com/idle-timer/)
* [cdn](http://cdnjs.com/libraries/jquery-idletimer/)
* [nuget]() - coming soon
* [Eric Hynds Idle Timeout plugin](https://github.com/ehynds/jquery-idle-timeout) 
(note we have similar functionality [here](http://thorst.github.io/jquery-idletimer/prod/demos/autologout.html))

Playground
-------
* [js fiddle](http://jsfiddle.net/thorst/2aGL4/)
* [css deck](http://cssdeck.com/labs/sosoro3m)

Version History
-------
| Version                                 | Author          | Released   | Links                         |
| --------------------------------------- |-----------------| ---------- | ----------------------------- |
| [1.0.0](https://raw.github.com/thorst/jquery-idletimer/master/dist/idle-timer.1.0.0.min.js)   | Todd Horst      | 03/10/2014 | [Change Log](CHANGELOG.md) - [Breaking Changes](CHANGELOG.md#breaking-changes) |
| [0.9.3](https://raw.github.com/thorst/jquery-idletimer/master/dist/idle-timer.0.9.3.min.js)   | Mike Sherov     | 08/04/2013 | 


Author History
-------
* Nicholas C. Zakas (yui Version) [idleTimer Blog](http://www.nczonline.net/blog/2009/06/02/detecting-if-the-user-is-idle-with-javascript-and-yui-3/) | [Github Profile](https://github.com/nzakas) | [Github](https://github.com/nzakas/jstools/)
* Paul Irish (initial jQuery Version) [idleTimer Blog](http://paulirish.com/2009/jquery-idletimer-plugin/) | [Github Profile](https://github.com/paulirish) | [Github](https://github.com/paulirish/jquery-idletimer/)
* Mike Sherov (transfered from Paul) [Github Profile](https://github.com/mikesherov)
* Todd Horst (transfered from Mike) [Github Profile](https://github.com/thorst)

Bug?
-------
Please create a [fiddle](http://jsfiddle.net/thorst/2aGL4/4/) and [submit a ticket](https://github.com/thorst/jquery-idletimer/issues/new)
