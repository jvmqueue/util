<h1>Interface Class</h1>
 
<p>Used to ensure a given object supports, has, methods defined in interface</p>

<h2>Use</h2>
<p>Allows generic calls on methods across objects</p>
<p>Factory patterns demand this, because factories generate objects dynamically, expecting those objects to have the same set of methods</p>
 <h3>Example</h3>

```
	var F = function(){};
 	F.prototype = {
 		clean:function(){}
 	};
 	var fInterface = new jvm.Interface('fInterface', ['clean']);
 	/* now, test if F satisfies fInterface via jvm.Interface static method */
 	jvm.Interface.ensureImplements(F, fInterface);

```

<h3>Stategies and Techniques</h3>

<h4>Fundemental Architecture</h4>
<dl>
	<dd>JavaScript Resource</dd>
</dl>



 

 