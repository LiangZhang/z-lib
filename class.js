var Class = (function(){
	
})()


//继承
//实现singlaton

function create(options){
	var options = options || {},nullFN = function(){};
	//新类的原始构造器
	var init = options.init || nullFN;
	delete options.init;
	//判定是否需要实现单例
	var singleton = !!options.singleton;
	delete options.singleton;

	//父类
	var superclass = options.inherit || {};
	delete options.inherit;
	
	function klass(){
		if (singleton && klass.instance) {//实现单例模式
			return klass.instance
		}
		if (singleton) 
			klass.instance = this;
		this.init.apply(this, arguments);
	}
	//是否继承
	if ($U.isFunction(options.inherit)) {
		var bridge = function(){};
		bridge.prototype = superclass;
		klass.prototype = new bridge;
		klass.$super = superclass;
	}
	klass.prototype.constructor = klass;
    return klass;
}
