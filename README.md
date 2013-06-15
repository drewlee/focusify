Focusify is a simple jQuery plugin for visually enhancing forms and form elements. Problems surface
when there is a requirement to provide visual cues from interactions with form fields. Since CSS
works from a top down, left to right hierarchy, there is no simple way to style an element that 
precedes, or is the parent of, an active field in the form. Focusify intends to resolve this issue
by dynamically altering the class name of the related focused element, therefore providing a hook
for the custome styling of the element's states.

##Usage
Simply initialize the plugin on the intended element(s):
```javascript
$('input.text').focusify();
```

##Options
The plugin accepts three optional settings, a custom class name to apply to the field's related
target (default class name is 'infocus'), and two jQuery selector strings, which specify the related
elements to apply the 'infocus' class name to (default is applied to the preceding element, assuming
the label element adjacent to the field is the intended target).

```javascript
$('input.text').focusify({
  // default classname is 'infocus'
  classname: 'my-focus',
	
  // default uses .prev() to target the preceding element
  // if specifying a custom selector, .parents('selector') method is used instead,
  // where 'selector' is the specified jQuery string
  parent: 'div.wrapper'

  // use if targeting an adjacent element, uses .siblings( ) selector
  sibling: 'label'
});
```

##Methods
Use the 'destroy' method when you need to remove focusify events and behaviors from your elements.

```javascript
$('input.text').focusify('destroy');
```

##Additional Info
See index.html for implementation examples.
