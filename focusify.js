(function($){
$.fn.focusify = function(args){
	var methods = {
		ns: 'focusify',
		
		st: {
			classname: 'infocus',
			parent: '_'
		},
		
		handleFocusBlur: function(){
			var $this = $(this),
				_this = methods,
				$parent = _this.st.parent === '_' ? $this.parent() : $this.parents(_this.st.parent);
					
			$parent.toggleClass(_this.st.classname);
		},
		
		init: function(opts){
			var _this = methods;
			
			$.extend(_this.st, opts || {});
			
			this.each(function(){
				if(!$.data(this, _this.ns)){
					$(this).bind('focus.' + _this.ns + ' blur.' + _this.ns, _this.handleFocusBlur);
					$.data(this, _this.ns, true);
				}
			});
		},
		
		destroy: function(){
			var _this = methods;
			
			this.each(function(){
				$(this).unbind('.' + _this.ns);
				$.removeData(this, _this.ns);
			});
		}
	};

	if(arguments.length && args === 'destroy'){
		methods.destroy.call(this);
	}else{
		methods.init.call(this, args);
	}
	
	return this;
};
})(jQuery);