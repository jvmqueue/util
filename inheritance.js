var jvm = jvm || {};
jvm.extend = (function(){
    var _fnc = {
        extend:function(subClass, superClass){
            for(name in superClass.prototype){
                if(!subClass.prototype[name]){
                    subClass.prototype[name] = superClass.prototype[name];
                }
            }
        },
        extendClassic:function(subClass, superClass){
            /*
            * first statement in the SubClass: SubClass.superClass.constructor.call(this, <any parameters your passing to superClass>);
            */            
            var F = function(){};
            F.prototype = superClass.prototype;
            subClass.prototype = new F(); // prevents having to instantiate superClass
            subClass.prototype.constructor = subClass; // destroyed constructor when we over wrote its prototype

            subClass.superClass = superClass.prototype;
            if(superClass.prototype.constructor == Object.prototype.constructor){ // do not want subclass to call Object's constructor
                superClass.prototype.constructor = superClass; // ensures subClass calls the correct constructor
            }            
        }
    };
    return{fnc:_fnc};
})();