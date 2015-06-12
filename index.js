(function(w, d, $, undefined){

    var main = function(){

        jvm.dom.setListener({ // define custom event for httpRequest to trigger once data retrivevd
            $node:$('#container'),
            event:'data:retrieved',
            data:{anyDataYouWantToSendToListner:'my data from setListener'},
            listener:listenerDataRetrieved
        });
        // the $node and event to trigger once data retrieved
        // httpRequest sends data back through triggering handler
        var req = jvm.httpRequest.fnc.getData({ // could wait for !!req and get data via req.requestText
            path:'data/education.json',
            cache:true,
            fileType:'json',
            event:'data:retrieved',
            $node:$('#container')
        });
    };

    var listenerDataRetrieved = function(e, paramDataFromTriggerHandler){ // triggered by httpRequest once data retrieved
        var json = paramDataFromTriggerHandler.resume;
        var frag = d.createDocumentFragment();
        var nodeNew = null;
        var nodeText = null;
        var $nodeExist = $('#yourdata');

        for(var name in json){
            nodeText = d.createTextNode(paramDataFromTriggerHandler.resume[name]);
            nodeNew = d.createElement('p');
            nodeNew.appendChild(nodeText);
            frag.appendChild(nodeNew);
        }
        
        $nodeExist.html(frag);
    };

    var intervalDom = w.setInterval(function(){ // wait for DOM, we do not need jQuery for this
        if(d.getElementsByTagName('div').length > 0){             
            w.clearInterval(intervalDom);
            main();
        }
    }, 33);
})(window, document, jQuery);