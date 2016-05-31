var jvm = jvm || {};
jvm.extend = (function(){
    var _fnc = {
        extend:function(subClass, superClass){
            for(name in superClass.prototype){
                if(!subClass.prototype[name]){
                    subClass.prototype[name] = superClass.prototype[name];
                }
            }
        }
    };
    return{fnc:_fnc};
})();