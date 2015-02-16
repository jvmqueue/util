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

		var myFunction = new MyFunction();
		var interfaceMyFunction = new jvm.util.Interface(interfaceMyFunction, ['clean', 'display', 'anyMethod']);
		jvm.util.Interface.ensureImplements(myFunction, interfaceMyFunction);	

```

<h3>Stategies and Techniques</h3>

<h4>Fundemental Architecture</h4>
<dl>
	<dd>JavaScript Resource</dd>
</dl>



 

 