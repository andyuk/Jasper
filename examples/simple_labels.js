var sys = require('sys'),
	jasper = require('../lib/jasper'),
	types = jasper.types;

/*
A more complex form that uses labels
*/

// wrap all fields in a div
types.Field.prototype.wrapper = new types.Element('div', {class: 'field'});

var c = new types.Label("Comments");

var fields = [
	new types.Literal('<p class="note">* required fields.</p>'),
	new types.ErrorsList('<h3>Please make sure all required fields are filled in</h3>'),
	
	new types.Input(
		{name: 'first_name', type: 'text', required: 'required', maxlength: '300'},
		new types.Label("First name")
	),
	new types.Input(
		{name: 'last_name', type: 'text', required: 'required', maxlength: '300'}, 
		new types.Label("Last name")
	),
	new types.Email(
		{name: 'email', type: 'email'}, 
		new types.Label("Email address")
	),
	new types.Textarea(
		{name: 'comments', required: 'required'}, 
		c
	),
	new types.Input({type: 'submit', value: 'Submit'})
];

var data = {
	first_name: 'Andrew',
	comments: 'Test content'
};
var form = new jasper.Form(fields, data, {action: '/test', method: 'POST'});

if (! form.validate()) {
	sys.puts('Form is not valid:');
}
sys.puts(form);

var data = {
	first_name: 'Tom',
	last_name: 'Jones',
	email: 'test@test.com',	
	comments: 'Test content'
};
form.setData(data);

if (form.validate()) {
	sys.puts('\nThis form is valid:');
}
sys.puts(form);