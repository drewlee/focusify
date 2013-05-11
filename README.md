Focusify is a simple jQuery plugin for visually enhancing forms and form elements.
Problems arise when there is a requirement to provide visual cues to the user when he/she
is interacting with form fields. Since CSS works from a top down, left to right hierarchy,
there is no easy way to style elements that precede, or are the parents of a field that is in
focus. Focusify intends to resolve this problem by attaching a class to the related element on focus,
therefore providing a method of styling a focused element's label or parent wrapper.

##Usage

Simply initialize the plugin on the intended elements:

$('input.text').focusify();

##Options

The plugin accepts three optional settings, a custom class name to apply to the field's related element (default is 'infocus'),
and two jQuery selector strings which specify the related elements to apply the infocus class name to (default is applied to the
preceding element since we assume the label element adjacent to the field is the target).

$('input.text').focusify({
	// default classname is 'infocus'
	classname: 'my-focus',
	
	// default uses .prev() to target the preceding element
	// if specifying a custom selector, .parents('selector') method is used instead,
	// where 'selector' is the passed jQuery string
	parent: 'div.wrapper'

	// use if targeting an adjacent element, uses .siblings('selector') selector	
	sibling: 'label'
});


##Methods

If you find the need to unbind focusify events and behaviors on your elements, use the 'destroy' method.

$('input.text').focusify('destroy');

##Additional Info

See index.html for demos and examples of implementation.