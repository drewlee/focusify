(function($){
$.fn.focusify = function(args){
	var methods = {
		ns: 'focusify',
		
		init: function(opts){
			var _s = {
					classname: 'infocus',
					parent: '_'
				},
				_this = methods;
			
			$.extend(_s, opts || {});
			
			function handleFocusBlur(e){
				var $this = $(this),
					$parent = _s.parent === '_' ? $this.parent() : $this.parents(_s.parent);
					
				$parent.toggleClass(_s.classname);
			}
			
			this.each(function(){
				if(!$.data(this, _this.ns)){
					$(this).bind('focus.' + _this.ns + ' blur.' + _this.ns, handleFocusBlur);
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