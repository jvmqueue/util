(function(w, d, undefined){
/* .htaccess file does not always detect Internet Explorer. This is a fail safe script */
    'use strict';
    var vars = {
        interations:0, 
        boundryStop:3,
        idNode:'carousel',
        locationRedirect:'http://jvmqueue.com//paul/PaulsSub/index.htm'
    };
    var browser = {
        detectDiretive:function(){
            var blnDetectDirectiveTag = false;
            var node = d.getElementById(vars.idNode);
            if(!!node.nodeName){
                blnDetectDirectiveTag = true;
            }
            return blnDetectDirectiveTag;
        },
        redirect:function(){
            w.location = vars.locationRedirect;
        }
    };
    
    var main = function(obj){ // composition
        var blnKnowsAngularDirective = obj.detectDiretive();
        if(blnKnowsAngularDirective == false){
            obj.redirect();
        }
    };

    var interval = w.setInterval(function(){ // wait for DOM
        var domNode = d.getElementsByTagName('div');
        if( (domNode.length > 3) || (vars.interations > 5) ){
            w.clearInterval(interval);
            main(browser);
        }
        vars.interations++;
    }, 777);

})(window, document);