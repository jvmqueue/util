var jvm = jvm || {};
/**
     Used: closure for any member in jvm.dom
     @alias jvm.dom
     @namespace
 */
jvm.dom = (function(w, d, $){ // depends on jQuery

    /**
	     Used: namespace for any dom method: appending, adding events, node manipulation
	     @alias dom
	     @namespace
     */
	
	/**
		Used: set any listener, native or custom
		@member
		@example
		jvm.dom.setListener({$node:$('#idNode'), event:'click', data:'anyData', listener:myListener});	 
		test for check-in
	 */        
	var _setListener = function(options){			
		options.$node.on(options.event, options.data, options.listener);
	};
	/**
		Used: get x, y coordinates relative to mouse cursor
		@member
		@example
		jvm.dom.setListener(any node);	 
	 */        		
	var _getMousePosition = function(paramNode){
		var nodeTarget = paramNode;
		var x = nodeTarget.parentNode.offsetLeft + nodeTarget.scrollLeft;
		var y = nodeTarget.offsetTop - nodeTarget.scrollTop;
		return{ordinate:x, abscissa:y};
	}; // End _getMousePosition

	return{ // public API
		setListener:_setListener,
		getMousePosition:_getMousePosition
	};
})(window, document, jQuery);