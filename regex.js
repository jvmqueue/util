var jvm = jvm || {};
jvm.regex = (function(w, d, $){
	var _fnc = {
		blnNotPrintable:function(paramString){
			return ( /[\x00-\x1F]/.test(paramString) );
		},
		blnIsAlpha:function(paramString, paramIntPosition){
			var UNICODE_FIRST_ALPHA = 65;
			var UNICODE_LAST_ALPHA = 122;
			var unicodeCharVal = paramString.charCodeAt( paramString.charAt(paramIntPosition) );        
			return ( (unicodeCharVal >= UNICODE_FIRST_ALPHA) && (unicodeCharVal <= UNICODE_LAST_ALPHA) );
		},
		blnIsNumeric:function(paramString, paramIntPosition){
			return ( !isNaN( paramString.charAt(paramIntPosition) ) );
		},
		blnIsWhiteSpace:function(paramString){
			return ( /[\x00-\x08\x0E-\x1F]/.test(paramString) );
		}
	};
	return{
		fnc:_fnc
	};
})(window, document, jQuery);