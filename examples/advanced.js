var sys = require('sys'),
	jasper = require('./lib/jasper'),
	types = jasper.types;

var data = {
	first_name: 'Tom',
	surname: 'Jones'
}
/*
types.Field.wrapper = new types.Element('div', {class: 'ctlHolder'});
*/
var fields = [
	new types.HTML('<p>Fill in your details below</p>'),	
	new types.HTML('<p class="note">* denotes a mandatory field.</p>'),

	//new types.Element('p', {class: 'standard_text'}, 'Fill in your details below2'),
	// or:
	//new types.Element('p', 'Fill in your details below'),
	
	// the error text is displayed if the form does not validate.
	
	new types.ErrorsList('Please correct the following fields:'),
	new types.HTML('<input type="text" />'),	
	// Fieldset
	// Field
	new types.Input("First name", {name: 'first_name', type: 'text', required: 'required', maxlength: '300'}),
	new types.Input("Last name", {name: 'last_name', type: 'text', required: 'required', maxlength: '300'}),
	new types.Input("Email", {name: 'email', type: 'email', required: 'required'}),
	
	// pattern is not supported yet.
	new types.Input("Card number", {name: 'card_number', type: 'text', pattern: '[-0-9]+'}),
	
	// How do we prevent the wrapper being put around the hidden field?
	new types.Input("Hidden field", {name: 'hidden_value', type: 'hidden', value: '24543'}),
];

var form = new jasper.Form(fields, data, {action: '/test', method: 'POST'});

if (! form.validate()) {
	sys.puts('Form is not valid');
}

// TODO: show 
/*
form.validate = function() {
	
	var is_valid = this._super();
	if (data.receive_newsletter == true && data.email == undefined) {
		form.setError('name', 'Enter your email address if you would like to receive the newsletter')
		is_valid = false;
	}
	return is_valid;
}

*/


sys.puts(form);

// let's validate the form.
