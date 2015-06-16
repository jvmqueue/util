<h1>httpRequest</h1>
 
<p>Used for HTTP Requests</p>
<p><a href="http://jvmqueue.com//httpRequest/site/">Live URL</a></p>
<h2>Use</h2>
<p>Generic AJAX... Upon data retrieved, fires custom event listener</p>
<p></p>
 <h3>Examples</h3>
```
        function listenerDataRetrieved(e, paramData){
            console.log('your data sent back by jvm.httpRequest.fnc.getData: ', paramData);
        }

        jvm.dom.setListener({ // define custom event for httpRequest to trigger once data retrivevd
            $node:$('#ExistingNodeId'),
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
            $node:$('#ExistingNodeId')
        });        

```
<h3>Stategies and Techniques</h3>
<ul>
    <li>Closure for encapsulation</li>
    <li>Custom DOM event listener for when data retrieved. Technique avoids those ugly call backs</li>
    <li>jQuery for DOM methods</li>
</ul>

<h3>Dependencies</h3>
<ul>
    <li>dom.js for jvm.dom.setListener</li>
    <li>jQuery for DOM methods</li>
</ul>




<h1>RegEx</h1>
 
<p>Used for validation against regular expressions</p>

<h2>Use</h2>
<p>Allows generic calls on regular expresions</p>
<p>Regular expressions are quite abstract. This library makes it easier to reuse regular expressions without having to know RegExp</p>
 <h3>Example</h3>

```
            var myValue = 'any string id=myId';
            var isAlpha = jvm.regex.fnc.blnIsAlpha(myValue, 1);
            var isNumeric = jvm.regex.fnc.blnIsNumeric(myValue, 2);
            var notPrintable = jvm.regex.fnc.blnNotPrintable(myValue);
            var isWhiteSpace = jvm.regex.fnc.blnIsWhiteSpace(myValue);
            var isInString = jvm.regex.fnc.blnIsInString(myValue, 'findInString');
            var isParenthesis = jvm.regex.fnc.blnIsParenthesis(myValue, 1);
            var strId = regEx.fnc.strIdFromString(myValue);
```

<h3>Stategies and Techniques</h3>
<ul>
	<li>Closure for encapsulation</li>
	<li>Namespacing to reduce probability of variable collisions</li>
	<li>Grunt for CSS lint, JS Lint, and jsDoc</li>
</ul>



<h1>dom</h1>
 
<p>Used for generic DOM methods</p>

<h2>Use</h2>
<p>DOM utilities</p>
<p></p>
 <h3>Examples</h3>
```
            jvm.dom.setListener({
                $node:$('#someExistingId'),
                event:'anyEventCustomOrPrimitive',
                data:{anyData:'any data you want to send to the event listener'},
                listener:functionMyListener
            });

            var nodeExist = document.getElementById('someExistingId');
            var positionCursor = jvm.dom.getMousePosition(nodeExist);
            var intX = positionCursor.ordinate;
            var intY = positionCursor.abscissa;

```
<h3>Stategies and Techniques</h3>
<ul>
    <li>Closure for encapsulation</li>
    <li>Namespacing to reduce probability of variable collisions</li>
    <li>jQuery for DOM methods</li>
</ul>

<h1>Interface Class</h1>
 
<p>Used to ensure a given object supports, has, methods defined in interface</p>

<h2>Use</h2>
<p>Allows generic calls on methods across objects</p>
<p>Factory patterns demand this, because factories generate objects dynamically, expecting those objects to have the same set of methods</p>
 <h3>Example</h3>

```
		var MyFunction = function(){};
	 	MyFunction.prototype = {
	 		clean:function(){},
	 		display:function(){},
	 		anyMethod:function(){},
	 		name:'MyFunction' // name property required by jvm.util.Interface. Allows Interface to throw meaningful exceptions
	 	};
		/* optimization: shutdown all interfaces for production environments */
		jvm.util.shutDownInterface(<true or false>);
		var myFunction = new MyFunction();
		var interfaceMyFunction = new jvm.util.Interface(interfaceMyFunction, ['clean', 'display', 'anyMethod']);
		jvm.util.Interface.ensureImplements(myFunction, interfaceMyFunction);	
```
<h3>Stategies and Techniques</h3>
<ul>
    <li>Closure for encapsulation</li>
    <li>Namespacing to reduce probability of variable collisions</li>
    <li>jQuery is intentionally NOT used</li>
</ul>






 

 