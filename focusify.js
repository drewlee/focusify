(function($){
var defaults = {
      classname: 'infocus',
      parent: null,
      sibling: null
    },
    namespace = 'focusify',
    Focusify = function(){
      this.init.apply(this, arguments);
    };

$.extend(Focusify.prototype, {
  init: function(element, config){
    var self = this;

    this.config = $.extend({}, defaults, config || {});
    this.$el = $(element);

    this.$el.on(
      'focus.' + namespace + ' blur.' + namespace, 
      $.proxy(self._handleFocusBlur, self)
    );
  },

  destroy: function(){
    this.$el
      .unbind('.' + namespace)
      .removeData(namespace); 
  },

  _handleFocusBlur: function(evt){
    var $el = $(evt.target),
        $focs = $();
    
    if (this.config.sibling){
      $focs = $focs.add( $el.siblings(this.config.sibling) );
    }

    if (this.config.parent){
      $focs = $focs.add( $el.parents(this.config.parent) );
    }

    if (!$focs.length){
      $focs = $el.prev();
    }

    $focs.toggleClass(this.config.classname);
  }
});

$.fn.focusify = function(args){
  var instance;
 
  if (args === 'destroy'){
    this.each(function(index, element){
      if ($.data(element, namespace)){
        instance = $.data(element, namespace);
        instance.destroy();
      }
    });
  } else {
    this.each(function(index, element){
      if (!$.data(element, namespace)){
        instance = new Focusify(element, args);
        $.data(element, namespace, instance);
      }
    });
  }
  
  return this;
};
})(jQuery);