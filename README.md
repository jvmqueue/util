<h1>RegEx</h1>
 
<p>Used for validation against regular expressions</p>

<h2>Use</h2>
<p>Allows generic calls on regular expresions</p>
<p>Regular expressions are quite abstract. This library makes it easier to reuse regular expressions without having to know RegExp</p>
 <h3>Example</h3>

```
            var myValue = 'any string';
            var isAlpha = jvm.regex.fnc.blnIsAlpha(myValue, 1);
            var isNumeric = jvm.regex.fnc.blnIsNumeric(myValue, 2);
            var notPrintable = jvm.regex.fnc.blnNotPrintable(myValue);
            var isWhiteSpace = jvm.regex.fnc.blnIsWhiteSpace(myValue);
            var isInString = jvm.regex.fnc.blnIsInString(myString, 'findInString');

```

<h3>Stategies and Techniques</h3>
<ul>
	<li>Closure for encapsulation</li>
	<li>Namespacing to reduce probability of variable collisions</li>
	<li>Grunt for CSS lint, JS Lint, and jsDoc</li>
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

<h4>Fundemental Architecture</h4>
<dl>
	<dd>JavaScript Resource</dd>
</dl>



 

 