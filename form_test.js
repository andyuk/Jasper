var sys = require('sys'),
	jasper = require('./lib/jasper'),
	types = jasper.types;

var data = {
	first_name: 'Tom',
	surname: 'Jones'
}

var fields = [
	new types.HTML('<p>Fill in your details below</p>'),
	
	//new types.Element('p', {class: 'standard_text'}, 'Fill in your details below'),
	// or:
	//new types.Element('p', 'Fill in your details below'),
	
	// the error text is displayed if the form does not validate.
	new types.ErrorsList('Please correct the following fields:'),
	new types.HTML('<input type="text" />'),
	
	new types.Input({name: 'first_name', type: 'text'}),
	// first_name will be filled in twice if we have duplicate fields with the same name attribute
	new types.Input({name: 'first_name', type: 'text'}),
	
	new types.Input({name: 'hidden_value', type: 'hidden', value: '24543'}),
];

var form = new jasper.Form(fields, data, {action: '/test', method: 'POST'});

form.required = ['first_name'];

if (! form.validate()) {
	sys.puts('form is not valid');
}

sys.puts(form);

// let's validate the form.
