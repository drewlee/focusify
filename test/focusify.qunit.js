var name = 'focusify',
    defaultCSS = 'infocus',
    customCSS = 'foobar',
    $input,
    $label,
    $legend,
    $parent;


module('Init/Destroy', {
  setup: function(){
    $input = $('#spec-input');
  }
});

test('Target element is in default state.', function(){
  equal( typeof $input.data(name), 'undefined', 'Passed' );
});

test('Plugin initializes on target element.', function(){
  $input.focusify();
  equal( typeof $input.data(name), 'object', 'Passed' );
});

test('Plugin method call is chainable.', function(){
  var $result = $input.focusify();
  equal( $result === $input, true, 'Passed' );
});

test('Plugin application is destroyable.', function(){
  $input.focusify();
  $input.focusify('destroy');

  equal( typeof $('#spec-input').data('focusify'), 'undefined', 'Passed' );
});


module('Behavior', {
  setup: function(){
    $input = $('#spec-input');
    $label = $input.prev();
    $input.focusify();
  }
});

test('Label has default state.', function(){
  equal( $label.hasClass(defaultCSS), false, 'Passed' );
});

test('Label has active state.', function(){
  stop();

  $input.one('focus', function(){
    equal( $label.hasClass(defaultCSS), true, 'Passed' );
    start();
  });

  $input.focus();
});

test('After destroy, label has default state.', function(){
  $input.focusify('destroy');
  stop();

  $input.one('focus', function(){
    equal( $label.hasClass(defaultCSS), false, 'Passed' );
    start();
  });

  $input.focus();
});


module('Customization: classname', {
  setup: function(){
    $input = $('#spec-input');
    $label = $input.prev();

    $input.focusify({
      classname: customCSS
    });
  }
});

test('Label has default state.', function(){
  equal( $label.hasClass(customCSS), false, 'Passed' );
});

test('Label has active state.', function(){
  stop();

  $input.one('focus', function(){
    equal( $label.hasClass(customCSS), true, 'Passed' );
    start();
  });

  $input.focus();
});

test('After destroy, label has default state.', function(){
  $input.focusify('destroy');
  stop();

  $input.one('focus', function(){
    equal( $label.hasClass(customCSS), false, 'Passed' );
    start();
  });

  $input.focus();
});


module('Customization: sibling', {
  setup: function(){
    $input = $('#spec-input');
    $label = $input.prev();
    $legend = $input.siblings('legend');

    $input.focusify({
      sibling: 'legend'
    });
  }
});

test('Legend has default state.', function(){
  equal( $legend.hasClass(defaultCSS), false, 'Passed' );
});

test('Legend has active state, label is ignored.', function(){
  stop();

  $input.one('focus', function(){
    equal( $legend.hasClass(defaultCSS), true, 'Passed' );
    equal( $label.hasClass(defaultCSS), false, 'Passed' );

    start();
  });

  $input.focus();
});

test('After destroy, legend has default state.', function(){
  $input.focusify('destroy');
  stop();

  $input.one('focus', function(){
    equal( $legend.hasClass(defaultCSS), false, 'Passed' );
    start();
  });

  $input.focus();
});



module('Customization: parent', {
  setup: function(){
    $input = $('#spec-input');
    $label = $input.prev();
    $parent = $input.parents('fieldset');

    $input.focusify({
      parent: 'fieldset'
    });
  }
});

test('Fieldset has default state.', function(){
  equal( $parent.hasClass(defaultCSS), false, 'Passed' );
});

test('Fieldset has active state, label is ignored.', function(){
  stop();

  $input.one('focus', function(){
    equal( $parent.hasClass(defaultCSS), true, 'Passed' );
    equal( $label.hasClass(defaultCSS), false, 'Passed' );

    start();
  });
  
  $input.focus();
});

test('After destroy, fieldset has default state.', function(){
  $input.focusify('destroy');
  stop();

  $input.one('focus', function(){
    equal( $parent.hasClass(defaultCSS), false, 'Passed' );
    start();
  });

  $input.focus();
});
