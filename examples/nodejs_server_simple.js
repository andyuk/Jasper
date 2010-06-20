var sys = require('sys'),
	http = require('http'),
	fs = require('fs'),
	jasper = require('../lib/jasper'),
	types = jasper.types;

/*
An example of processing a form request using Node.
It's recommended to use a web framework!
*/

function handlePageRequest(req, res) {
	
	// wrap all fields in a div
	types.Field.prototype.wrapper = new types.Element('div', {class: 'field'});

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
			new types.Label("Comments")
		),
		new types.Input({type: 'submit', value: 'Submit'})
	];

	var data = {
		first_name: 'Andrew',
		comments: 'Test content'
	};
	var form = new jasper.Form(fields, data, {action: '/', method: 'POST'});
	
	return form.toString();
}

http.createServer(function (req, res) {
	
	if (req.url == "/static/css/simple.css") {
		
		res.writeHead(200, {'Content-Type': 'text/css'});
		
		var file = fs.createReadStream('./static/css/simple.css');
		file.setEncoding('ascii');
		file.addListener('data', function (data) {
		  res.write(data);
		});
		file.addListener('end', function (data) {
		  res.end();
		});
		
	} else {
	
	  res.writeHead(200, {'Content-Type': 'text/html'});

		res.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> \
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-us" lang="en-us"> \
		  <head> \
		    <title>Jasper</title> \
				<meta http-equiv="content-type" content="text/html; charset=utf-8" /> \
				<link rel="stylesheet" href="/static/css/simple.css" type="text/css" /> \
			</head> \
			<body>');

		res.write(handlePageRequest(req, res));
	
		res.end('</body> \
	</html>');

	}

}).listen(8080, "127.0.0.1");

sys.puts('Server running at http://127.0.0.1:8080/');