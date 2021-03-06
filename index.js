(function(w, d, $, undefined){

/*
    index.js only used to test httpRequest.js
    We kept index.js as simple as possible. With hope, allowing others to employ our scripts with ease
    Note: index.js is started by intervalDom at the bottom of this file
    Note: once intervalDom completes its work, control is handed to main()
*/

    var main = function(){

        jvm.dom.setListener({ // define custom event for httpRequest to trigger once data retrieved
            $node:$('#container'),
            event:'data:retrieved',
            data:{anyDataYouWantToSendToListner:'my data from setListener'},
            listener:listenerDataRetrieved
        });
        // the $node and event to trigger once data retrieved
        // httpRequest sends data back through triggering handler
        // Note: $node can be any existing node
        // Note: event can be any event, custom or native
        var req = jvm.httpRequest.fnc.getData({ // could wait for !!req and get data via req.requestText
            $node:$('#container'),
            event:'data:retrieved',
            path:'data/education.json',
            fileType:'json',
            cache:true // set to false if you dont want to data cached on the client
        });
    };

    var listenerDataRetrieved = function(e, paramDataFromTriggerHandler){ // triggered by httpRequest once data retrieved
        var json = paramDataFromTriggerHandler.resume;
        var frag = d.createDocumentFragment();
        var nodeNew = null;
        var nodeText = null;
        var $nodeExist = $('#yourdata');

        for(var name in json){ // intentional old school methods
            nodeText = d.createTextNode(paramDataFromTriggerHandler.resume[name]);
            nodeNew = d.createElement('p');
            nodeNew.appendChild(nodeText);
            frag.appendChild(nodeNew);
        }
        
        $nodeExist.append(frag); // OK. lets us jQuery
    };

    var intervalDom = w.setInterval(function(){ // wait for DOM, we do not need jQuery for this
        if(d.getElementsByTagName('div').length > 0){             
            w.clearInterval(intervalDom);
            main(); // start main
        }
    }, 33);
})(window, document, jQuery);