/*! Idle Timer - v0.9.2 - 2013-08-04
* https://github.com/mikesherov/jquery-idletimer
* Copyright (c) 2013 Paul Irish; Licensed MIT */
( function( $ ) {

$.idleTimer = function( firstParam, elem, opts ) {

	// defaults that are to be stored as instance props on the elem
	opts = $.extend( {
		startImmediately: true,   //starts a timeout as soon as the timer is set up
		idle: false,              //indicates if the user is idle
		enabled: true,            //indicates if the idle timer is enabled
		timeout: 30000,           //the amount of time (ms) before the user is considered idle
		events: "mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove" // activity is one of these events
	}, opts );


	elem = elem || document;

	var jqElem = $( elem ),
		obj = jqElem.data("idleTimerObj") || {},

		/* (intentionally not documented)
		 * Toggles the idle state and fires an appropriate event.
		 * @return {void}
		 */
		toggleIdleState = function( myelem ) {

			// curse you, mozilla setTimeout lateness bug!
			if ( typeof myelem === "number" ) {
				myelem = undefined;
			}

			var obj = $.data( myelem || elem, "idleTimerObj" );

			//toggle the state
			obj.idle = !obj.idle;

			// reset timeout
			var elapsed = ( +new Date() ) - obj.olddate;
			obj.olddate = +new Date();

			// handle Chrome always triggering idle after js alert or comfirm popup
			if ( obj.idle && ( elapsed < opts.timeout ) ) {
				obj.idle = false;
				clearTimeout( $.idleTimer.tId );
				if ( opts.enabled ) {
					$.idleTimer.tId = setTimeout( toggleIdleState, opts.timeout );
				}
				return;
			}

			// create a custom event, but first, store the new state on the element
			// and then append that string to a namespace
			var event = $.Event( $.data( elem, "idleTimer", obj.idle ? "idle" : "active" ) + ".idleTimer" );
			$( elem ).trigger( event );
		},

		/**
		 * Stops the idle timer. This removes appropriate event handlers
		 * and cancels any pending timeouts.
		 * @return {void}
		 * @method stop
		 * @static
		 */
		stop = function( jqElem ) {

			var obj = jqElem.data("idleTimerObj") || {};

			//set to disabled
			obj.enabled = false;

			//clear any pending timeouts
			clearTimeout( obj.tId );

			//detach the event handlers
			jqElem.off(".idleTimer");
		};

	obj.olddate = obj.olddate || +new Date();

	if ( typeof firstParam === "number" ) {
		opts.timeout = firstParam;
	} else if ( firstParam === "destroy" ) {
		stop( jqElem );
		return this;
	} else if ( firstParam === "getElapsedTime" ) {
		return ( +new Date() ) - obj.olddate;
	}


	/* (intentionally not documented)
	 * Handles a user event indicating that the user isn't idle.
	 * @param {Event} event A DOM2-normalized event object.
	 * @return {void}
	 */
	jqElem.on( $.trim( ( opts.events + " " ).split(" ").join(".idleTimer ") ), function() {
		var obj = $.data( this, "idleTimerObj" );

		//clear any existing timeout
		clearTimeout( obj.tId );

		//if the idle timer is enabled
		if ( obj.enabled ){
			//if it's idle, that means the user is no longer idle
			if ( obj.idle ){
				toggleIdleState( this );
			}

			//set a new timeout
			obj.tId = setTimeout( toggleIdleState, obj.timeout );
		}
	});

	obj.idle = opts.idle;
	obj.enabled = opts.enabled;
	obj.timeout = opts.timeout;

	//set a timeout to toggle state. May wish to omit this in some situations
	if ( opts.startImmediately ) {
		obj.tId = setTimeout( toggleIdleState, obj.timeout );
	}

	// assume the user is active for the first x seconds.
	jqElem.data( "idleTimer", "active" );

	// store our instance on the object
	jqElem.data( "idleTimerObj", obj );
};

$.fn.idleTimer = function( firstParam, opts ) {
	// Allow omission of opts for backward compatibility
	if ( !opts ) {
		opts = {};
	}

	if ( this[0] ){
		return $.idleTimer( firstParam, this[0], opts );
	}

	return this;
};

})( jQuery );
