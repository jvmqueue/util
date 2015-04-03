var jvm = jvm || {};
/**
     Used: closure for any member in jvm.dom
     @alias jvm.util
     @namespace
 */
jvm.dom = (function(w, d){ // agnositic, no library dependecies

    /**
	     Used: namespace for any dom method: appending, adding events, node manipulation
	     @alias _dom
	     @namespace
     */
	
	/**
		Used: set any listener, native or custom
		@member
		@example
		_dom.setListener({$node:$('#idNode'), event:'click', data:'anyData', listener:myListener});	 
	 */        
		var _setListener = function(options){			
			options.$node.on(options.event, options.data, options.listener);
		};
		var _getMousePosition = function(paramNode){
			var nodeTarget = paramNode;
			var x = nodeTarget.parentNode.offsetLeft + nodeTarget.scrollLeft;
			var y = nodeTarget.offsetTop - nodeTarget.scrollTop;
			return{ordinate:x, absissa:y};
		}; // End getMousePosition

	return{ // public API
		setListener:_setListener,
		getMousePosition:_getMousePosition
	};
})(window, document);