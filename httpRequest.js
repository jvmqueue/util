var jvm = jvm || {};

jvm.httpRequest = (function(w, d, $, undefined){
  var _fnc = {
      getData:function(options){
        var noCache = new Date().getMilliseconds();
        return $.ajax({ // return the response so that callee does not have to look for reponse
            url:options.path + ( !!options.cache ? '' : '?noCache=' + noCache ),
            context:d.body,
            crossDomain:false,
            dataType:( !!options.fileType ? options.fileType : 'xml' ),
            ifModified:true,      
            success:function(paramData){
              options.$node.triggerHandler(options.event, [paramData]);
            },
            statusCode:{
              404:function(){
                throw new Error('Exception: 404 - file not found');
              }
            },
            error:function(paramError){                
              throw new Error(
                'Exception: util.getData failed with:' + paramError.statusText +
                ' fileType:\t' + options.fileType +
                '\n, but file came back as:\t' + paramError.responseText
              ); 
            }
          }).done(function(){/* anything after done */});

      } // End getData

  }; // End _fnc

  return{ // public
    fnc:_fnc
  };

})(window, document, jQuery);



